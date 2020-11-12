'use strict'

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#bootstrap
 */

const createSuperAdminUser = async () => {
  const params = {
    username:   process.env.ADMIN_USER,
    password:   process.env.ADMIN_PASS,
    firstname:  process.env.ADMIN_USER,
    lastname:   process.env.ADMIN_USER,
    email:      process.env.ADMIN_EMAIL,
    blocked:    false,
    isActive:   true,
  }

  if (params.username == undefined || params.password == undefined) {
    console.warn('Unable to create admin user, check your environment variables.')
    return
  }

  const admins = await strapi.query('user', 'admin').find({ _limit: 1 })
  if (admins.length) {
    console.error(`Admin user already exists: ${admins[0].email}`)
    return
  }

  try {
    let superAdminRole = await strapi.query('role', 'admin').findOne(
      { code: 'strapi-super-admin' }
    )
    /* At first startup the role might not exist yet */
    if (!superAdminRole) {
      superAdminRole = await strapi.query('role', 'admin').create({
        name: 'Super Admin',
        code: 'strapi-super-admin',
        description: 'Super Admins can access and manage all features and settings.',
      })
    }
    // Hash password before storing in the database
    params.roles = [superAdminRole.id]
    params.password = await strapi.admin.services.auth.hashPassword(params.password)
    // Create admin account
    const admin = await strapi.query('user', 'admin').create({...params})
    console.info('Admin account created:', admin.email)
  } catch (error) {
    console.error(error)
  }
}

const findPublicRole = async () => {
  const result = await strapi
    .query("role", "users-permissions")
    .findOne({ type: "public" })
  return result
}

const setDefaultPermissions = async () => {
  const role = await findPublicRole()
  const permissions = await strapi
    .query("permission", "users-permissions")
    .find({ type: "application", role: role.id, action: "create" })
  await Promise.all(
    permissions.map(p =>
      strapi
        .query("permission", "users-permissions")
        .update({ id: p.id }, { enabled: true })
    )
  )
  console.info('Added create permissions for Public role.')
}

const isFirstRun = async () => {
  const pluginStore = strapi.store({
    environment: strapi.config.environment,
    type: "type",
    name: "setup"
  })
  const initHasRun = await pluginStore.get({ key: "initHasRun" })
  await pluginStore.set({ key: "initHasRun", value: true })
  return !initHasRun
}

module.exports = async () => {
  const shouldSetDefaultPermissions = await isFirstRun()
  if (shouldSetDefaultPermissions) {
    await setDefaultPermissions()
    await createSuperAdminUser()
  }
}

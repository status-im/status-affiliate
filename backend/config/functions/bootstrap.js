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

async function bootstrap_admin() {
  const params = {
    username:   process.env.ADMIN_USER,
    password:   process.env.ADMIN_PASS,
    firstname:  process.env.ADMIN_USER,
    lastname:   process.env.ADMIN_USER,
    email:      process.env.ADMIN_EMAIL,
    blocked:    false,
    isActive:   true,
  }

  const admins = await strapi.query('user', 'admin').find({ _limit: 1 })
  if (admins.length) {
    console.error(`Admin user already exists: ${admins[0].email}`)
    return
  }

  try {
    // in the admin under services you can find the super admin role
    const superAdminRole = await strapi.admin.services.role.getSuperAdmin()
    // Hash password before storing in the database
    console.dir(superAdminRole)
    params.roles = [superAdminRole.id]
    params.password = await strapi.admin.services.auth.hashPassword(params.password)
    // Create admin account
    const admin = await strapi.query('user', 'admin').create({...params})
    console.info('Admin account created:', admin)
  } catch (error) {
    console.error(error)
  }
}

module.exports = async () => {
  await bootstrap_admin()
}

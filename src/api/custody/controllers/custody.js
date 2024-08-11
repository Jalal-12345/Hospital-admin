'use strict';

/**
 * custody controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::custody.custody');

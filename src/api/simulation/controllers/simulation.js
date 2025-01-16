'use strict';

/**
 *  simulation controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::simulation.simulation');

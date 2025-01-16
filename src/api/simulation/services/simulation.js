'use strict';

/**
 * simulation service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::simulation.simulation');

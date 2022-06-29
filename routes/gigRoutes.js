const {
  deleteGig,
  updateGig,
  createGig,
  getSingleGig,
  getAllGigs,
} = require("../controllers/gigControllers");

exports.gigRoutes = [
  {
    method: "GET",
    path: `/api/v1/all`,
    config: {
      handler: getAllGigs,
    },
  },
  {
    method: "GET",
    path: `/api/v1/gigs/{id}`,
    config: {
      handler: getSingleGig,
    },
  },
  {
    method: "POST",
    path: `/api/v1/gigs/create`,
    config: {
      handler: createGig,
    },
  },
  {
    method: "DELETE",
    path: `/api/v1/gigs/delete/{id}`,
    config: {
      handler: deleteGig,
    },
  },
  {
    method: "PUT",
    path: `/api/v1/gigs/update/{id}`,
    config: {
      handler: updateGig,
    },
  },
];

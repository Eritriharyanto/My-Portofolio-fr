const backenditems = [
  {
    id: 1,
    name: "Secure Auth Microservice",
    version: "v1.2.4",
    uptime: "99.9%",
    tech: ["Node.js", "Express", "Redis", "MongoDB"],
    endpoints: [
      "POST /auth/login",
      "GET /user/profile",
      "PATCH /security/reset",
    ],
    repo: "https://github.com/kingeri/auth-service",
  },
  {
    id: 2,
    name: "Inventory Management API",
    version: "v0.8.5",
    uptime: "100%",
    tech: ["PostgreSQL", "Prisma", "Go"],
    endpoints: ["GET /stock/all", "POST /order/create", "DELETE /item/:id"],
    repo: "https://github.com/kingeri/inventory-api",
  },
];

export default backenditems;

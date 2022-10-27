export const validUser = {
  email: 'admin@admin.com',
  password: 'secret_admin',
};

export const invalidUser = {
  email: 'email@email.com',
  password: 'ronaldo',
};

export const findUser = {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: '1234567',
};

export const adminToken = {
  token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey
  JlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY2Njg2NTk
  wMSwiZXhwIjoxNjY3MDM4NzAxfQ
  .g29gsYRnUsIRZAHAYcFT9CV6JMdg3FLnsMtEQmcRcEs`,
};

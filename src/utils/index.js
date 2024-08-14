const mapDBToModel = ({
  id,
  title,
  body,
  tags,
  created_at,
  updated_at,
  username,
}) => ({
  id,
  title,
  body,
  tags,
  username,
  createdAt: created_at,
  updatedAt: updated_at,
});

module.exports = { mapDBToModel };

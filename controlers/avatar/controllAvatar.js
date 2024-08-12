const getAvatar = async (req, res) => {
      const imageP =
        `/avatars/${req.params.name}`;
      const data = { greeting: imageP };
  res.render("showAvatar", data);
};

module.exports = { getAvatar };

const registerUser = (req, res) => {
  res.json({ msg: "register user controller" });
};

const loginUser = (req, res) => {
  res.json({ msg: "login user controller" });
};

export { registerUser, loginUser };

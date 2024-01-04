function handler(req, res) {
  const { nit } = req.query
  if (!nit) return res.status(400).json({ status: false })

  res.status(200).json(findUser(nit))
}

function findUser(nit) {
  if (nit === "9111111") {
    return [{
      nit: '111119',
      name: "John",
      age: 32,
      location: "Cr 6 No. 14-48 OF 202"
    }]
  }

  if (nit === "123456") {
    return [{
      nit: '123456',
      name: "Martha",
      age: 22,
      location: "Cr 12 No. 20-69 OF 108"
    }]
  }

  return []
}

export default handler
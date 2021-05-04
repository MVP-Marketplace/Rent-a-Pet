module.exports = {
  findAll: async (req, res) => {
    const { resources } = await cloudinary.search
      .expression("folder:samples")
      .sort_by("public_id", "desc")
      .max_results(30)
      .execute();

    let demoIds = [];

    resources.forEach((file) =>
      demoIds.push({ id: file.public_id, media: file.resource_type })
    );

    res.send(demoIds);
  },
};

import axios from "axios";

const updateData = async (user, formData, form, file = null) => {
  const url = "http://localhost:3000";
  const data = new FormData();

  if (form === "user") {
    var endpoint = `/users/${user.userId}`;
    if (formData.firstName != user.firstName)
      data.append("firstName", formData["firstName"]);
    if (formData.lastName != user.lastName)
      data.append("lastName", formData["lastName"]);
    if (formData.password != user.password)
      data.append("password", formData["password"]);
  }

  if (form === "extra") {
    var endpoint = `/users/${user.userId}/extra`;
    const extras = user.extra_info;
    if (file) {
      const imageId = extras.publicId;
      data.append("image", file);
      data.append("imageId", imageId);
    }
    if (formData.github != extras.github)
      data.append("github", formData["github"]);
    if (formData.linkedin != extras.linkedin)
      data.append("linkedin", formData["linkedin"]);
    if (formData.position != extras.position)
      data.append("position", formData["position"]);
    if (formData.description != extras.description)
      data.append("description", formData["description"]);
  }

  try {
    let response = await axios.patch(url + endpoint, data);
    return response
  } catch (error) {
    console.log(error);
  }
};

export default updateData;

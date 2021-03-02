import { useParams } from "react-router-dom";

function Profile() {
  const { username } = useParams();
  return "Profile";
}

export default Profile;

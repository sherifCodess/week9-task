import { useState, useEffect } from "react";

function UserProfileCard() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProfile({
        name: "Ada Lovelace",
        email: "ada@example.com",
        city: "London",
      });

      setLoading(false);
    }, 2000);

    // Cleanup function
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>
        <strong>Name:</strong> {profile.name}
      </p>
      <p>
        <strong>Email:</strong> {profile.email}
      </p>
      <p>
        <strong>City:</strong> {profile.city}
      </p>
    </div>
  );
}

export default UserProfileCard;

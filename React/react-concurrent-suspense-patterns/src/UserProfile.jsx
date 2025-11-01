import { useEffect, useState } from "react";
import { fetchUserProfile } from "./fakeApi";

/**
 * Suspense-ready data loader using lazy effect.
 * This could later be adapted to React’s official `use` API (React 19).
 */
export default function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let mounted = true;
    fetchUserProfile(userId).then((data) => mounted && setUser(data));
    return () => (mounted = false);
  }, [userId]);

  if (!user) throw new Promise(() => {}); // suspend intentionally

  return (
    <div style={styles.profile}>
      <h3>{user.name}</h3>
      <p>{user.bio}</p>
    </div>
  );
}

const styles = {
  profile: {
    border: "1px solid #ddd",
    borderRadius: 8,
    padding: 16,
    background: "#fafafa",
    marginTop: 20
  }
};

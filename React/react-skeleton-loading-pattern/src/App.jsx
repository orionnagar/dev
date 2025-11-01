import { useEffect, useState } from "react";
import "./styles.css";

/**
 * Skeleton Loading Pattern Demo
 * -----------------------------
 * Shows shimmer placeholders while simulating data fetching.
 */

function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-avatar shimmer" />
      <div className="skeleton-lines">
        <div className="skeleton-line shimmer" />
        <div className="skeleton-line shimmer" />
        <div className="skeleton-line short shimmer" />
      </div>
    </div>
  );
}

function ProfileCard({ user }) {
  return (
    <div className="profile-card">
      <img src={`https://i.pravatar.cc/80?u=${user.id}`} alt={user.name} />
      <div>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    </div>
  );
}

export default function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const timer = setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users?_limit=5");
      const data = await res.json();
      setUsers(data);
    }, 2000); // simulate slow fetch
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <h1>React Skeleton Loading Pattern</h1>
      <p>Shimmer placeholders maintain layout stability during fetch.</p>

      {!users
        ? Array.from({ length: 5 }).map((_, i) => <SkeletonCard key={i} />)
        : users.map((u) => <ProfileCard key={u.id} user={u} />)}
    </div>
  );
}

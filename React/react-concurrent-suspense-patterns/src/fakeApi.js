/**
 * Fake API that simulates delayed responses
 */
export function fetchUserProfile(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        name: `User ${id}`,
        bio: `This is the bio for User ${id}.`
      });
    }, 1500 + Math.random() * 1000);
  });
}

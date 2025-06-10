const { prismaClient } = require('@repo/db/client');

// Use module.exports instead of export default
module.exports = async function Home() {
  const user = await prismaClient.user.findFirst();
  return (
    <div>
      {user?.username}
      {user?.password}
    </div>
  );
}
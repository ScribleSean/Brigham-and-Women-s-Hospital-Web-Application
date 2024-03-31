const ec2 = true;
export let link = "http://localhost:3000";
if (!ec2) {
  link = "http://localhost:3000";
}

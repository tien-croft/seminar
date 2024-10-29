type Status = "online" | "offline" | "dead";

// Object 1
const membersObj1 = {
  changjin: { id: 1, status: "online" },
  seoungyoon: { id: 2, status: "offline" },
  suah: { id: 3, status: "offline" },
};

membersObj1["tien"] = { id: 4, status: "dead" };
// const member = membersObj1["tien"];

// [...membersObj1].map((member) => {
//   console.log(member[0], member[1]);
// });

// Object.entries(membersObj1).forEach((member) => {
//   console.log(member[0], member[1]);
// });

// Object 2
const membersObj2: { [key: string]: { id: number; status: string } } = {
  changjin: { id: 1, status: "online" },
  seoungyoon: { id: 2, status: "offline" },
  suah: { id: 3, status: "offline" },
};

membersObj2["tien"] = { id: 4, status: "dead" };
// const member = membersObj2["tien"];

// Object.entries(membersObj2).forEach((member) => {
//   console.log(member[0], member[1]);
// });

// Map
const membersMap = new Map<string, { id: number; status: string }>([
  ["changjin", { id: 1, status: "online" }],
  ["seoungyoon", { id: 2, status: "offline" }],
  ["suah", { id: 3, status: "offline" }],
]);

membersMap.set("tien", { id: 4, status: "dead" });

// [...membersMap].forEach((member) => {
//   console.log(member[0], member[1]);
// });

// Array
const memberIdsInHurdle = [1, 2, 3, 3];
const isMemberAlive = (id: number) => {
  return memberIdsInHurdle.includes(id);
};

// console.log(isMemberAlive(membersMap.get("seoungyoon")!.id));
// console.log(isMemberAlive(membersMap.get("tien")!.id));

const memberIdsInHurdleSet = new Set(memberIdsInHurdle);
const isMemberAliveTwo = (id: number) => {
  return memberIdsInHurdleSet.has(id);
};

// console.log(isMemberAliveTwo(membersMap.get("seoungyoon")!.id));
// console.log(isMemberAliveTwo(membersMap.get("tien")!.id));

const removeMemberFromIds = (id: number) => {
  return memberIdsInHurdle.filter((memberId) => memberId !== id);
};
// console.log(removeMemberFromIds(membersMap.get("suah")!.id));

const removeMemberFromIdsTwo = (id: number) => {
  return memberIdsInHurdleSet.delete(id);
};
// console.log(removeMemberFromIds(membersMap.get("suah")!.id));

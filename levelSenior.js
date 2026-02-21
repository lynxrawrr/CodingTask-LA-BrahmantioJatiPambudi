/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Mengubah pohon binari menjadi string.
 * @param {TreeNode} root - Akar pohon
 * @return {string} - String representasi pohon
 */
var serialize = function (root) {
  if (root === null) {
    return "null";
  }

  const res = [];
  const q = [root];
  let head = 0;

  while (head < q.length) {
    const node = q[head++];

    if (node === null) {
      res.push("null");
      continue;
    }

    res.push(String(node.val));
    q.push(node.left);
    q.push(node.right);
  }

  while (res.length && res[res.length - 1] === "null") {
    res.pop();
  }

  return res.join(",");
};

/**
 * Mengubah string kembali ke pohon binari.
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data || data === "null") {
    return null;
  }

  const arr = data.split(",");
  if (arr[0] === "null") {
    return null;
  }

  const root = new TreeNode(Number(arr[0]));
  const q = [root];
  let head = 0;

  let i = 1;
  while (head < q.length && i < arr.length) {
    const node = q[head++];
    const leftVal = arr[i++];
    if (leftVal !== undefined && leftVal !== "null") {
      node.left = new TreeNode(Number(leftVal));
      q.push(node.left);
    }

    const rightVal = arr[i++];
    if (rightVal !== undefined && rightVal !== "null") {
      node.right = new TreeNode(Number(rightVal));
      q.push(node.right);
    }
  }

  return root;
};

// --- CONTOH PEMANGGILAN ---
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);

const serialized = serialize(root);
console.log("serialized:", serialized); // Contoh: "1,2,3,null,null,4,5"

const deserialized = deserialize(serialized);
console.log(deserialized.val); // 1
console.log(deserialized.left.val); // 2
console.log(deserialized.right.left.val); // 4
console.log(deserialized.right.right.val); // 5

require('datejs');

function combineUsers(...args) {
  // Step 2: Initialize the return object
  const combinedObject = {
    users: []
  };

  // Step 3 & 4: Loop through args and merge arrays
  args.forEach(arr => {
    combinedObject.users.push(...arr);
  });

  // Step 5: Add current date in M/d/yyyy format
  combinedObject.merge_date = new Date().toString('M/d/yyyy');

  // Step 7: Return object
  return combinedObject;
}

// Example test
const result = combineUsers(
  ['alice', 'bob'],
  ['charlie'],
  ['dave', 'eve']
);

console.log(result);



module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};

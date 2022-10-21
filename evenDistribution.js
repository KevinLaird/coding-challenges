// logical flows
// maintainable flows

// logs written to server, lots of them. Can't have one server processing it
// distribute the workload
// write a function that can help you distribute workload
// input: list of job ids
// number of queues you want to create
// even job distribution as possible

// jobIds: string[]
// queues: number

// scale / scope
// a lot of data going out
// does order matter?
// no bad data
// expected output?
// 3 or 4 jobids

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const myFunction = (jobIds, queues) => {
  const myObject = {};
  // let counter = 0;

  for (let i = 0; i < jobIds.length; i++) {
    if (!myObject[i % queues]) {
      myObject[i % queues] = [];
    }
    myObject[i % queues].push(jobIds[i]);
  }

  // for (const id of jobIds) {
  //   if (counter % queues) {
  //     counter = 0;
  //   }
  //   if (!myObject[counter]) {
  //     myObject[counter] = [];
  //   }
  //   myObject[counter].push(id);
  //   counter++;
  // }
  console.log(Object.values(myObject));
  return myObject;
};

myFunction(myArray, 3);

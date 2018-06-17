// first reuire the module you require
const fs = require('fs');
const util = require('util');
//const scanText = util.promisify('fs.writeFile')


		fs.writeFile('file1.txt', 'This is the the the beginning of file1', (err) => {
				if(err) throw err;
				console.log('the file has been saved')
			}) 
		fs.writeFile('file2.txt', 'This is the the the beginning of file1', (err) => {
				if(err) throw err;
				console.log('the file has been saved')
			});

		fs.writeFile('file3.txt', 'This is th the the beginning of file1', (err) => {
				if(err) throw err;
				console.log('the file has been saved')
			});

		fs.writeFile('file4.txt', 'This is the the the beginning of file1', (err) => {
				if(err) throw err;
				console.log('the file has been saved')
			});


let concatData = '';

const file1Read = fs.readFile('./file1.txt', (err, data) => {
	//file1Read.indexof("the".length); // this is my guess
})
	.then((data) =>{
		concatData += data;
	})
	.catch((err)=>{
		if(err) throw err;
	})

const file2Read = fs.readFile('./file2.txt', (err, data) => {

})
	.then((data) =>{
		concatData += data;
	})
	.catch((err)=>{
		if(err) throw err;
	})


const file3Read = fs.readFile('./file3.txt', (err, data) => {})
	.then((data) =>{
		concatData += data;
	})
	.catch((err)=>{
		if(err) throw err;
	})


const file4Read = fs.readFile('./file4.txt', (err, data) => {})
	.then((data) =>{
		concatData += data;
	})
	.catch((err)=>{
		if(err) throw err;
	})

// 4 Files with text to be scanned



//Promise.all
Promise.all([file_promise1, file_promise2])
	.then(() => { 
	console.log('all files fin.'); })
	.catch((err) => {
		if(err) throw err;
	})

// the answer to step 2 is located in one of the smaller videos

async function main() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
 
    /** Mulai penyebaran, kembalikan janji yang diselesaikan ke objek kontrak */
    const hello_world = await HelloWorld.deploy("Halo sayang");   
    console.log("Selamat contract anda telah di sebarkan dengan alamat:", hello_world.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });
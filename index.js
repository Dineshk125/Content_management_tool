document.addEventListener("DOMContentLoaded", () => {
    const blogForm = document.getElementById("blog-form");

    blogForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;
        const imageFile = document.getElementById("image").files[0];
        const videoFile = document.getElementById("video").files[0];

        // You can handle saving the data and files to the server here
        // This is a simplified example, in a real application, you would send a POST request to your server.

        console.log("Title:", title);
        console.log("Content:", content);
        console.log("Image File:", imageFile);
        console.log("Video File:", videoFile);

        // Clear the form after submission (you can do this in a more elegant way)
        document.getElementById("title").value = "";
        document.getElementById("content").value = "";
        document.getElementById("image").value = "";
        document.getElementById("video").value = "";
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.querySelector(".login-button");
  const signUpForm = document.querySelector(".signup");
  const closeButton = document.querySelector(".signup-close");

  // Show sign-up form
  loginButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior
    signUpForm.style.display = "flex";
  });

  // Close sign-up form
  closeButton.addEventListener("click", () => {
    signUpForm.style.display = "none";
  });
});

const getData = async () => {
  const response = await fetch(
    `https://ecom-test-2209b-default-rtdb.firebaseio.com/category.json`
  );
  const data = await response.json();
  console.log(data);
};
getData();

// hiển thị danh sách danh mục và sản phẩm lên UI ( gợi ý , dùng map để render ra html , dùng innerHTML để gán html vào thẻ, dùng querySelector để lấy thẻ)

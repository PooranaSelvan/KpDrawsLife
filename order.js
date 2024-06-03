
// document.getElementById('contact-form').addEventListener('submit', function (e) {
//     e.preventDefault();
//     var data = new FormData(e.target);

//     fetch("https://formspree.io/f/moqgzgwr", {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json'
//         },
//         body: data
//     }).then(response => {
//         if (response.ok) {
//             alert(`Order Placed Successfully!!
//                     We'll Reach You ASAP..`);
//         } else {
//             response.json().then(data => {
//                 if (Object.hasOwn(data, 'errors')) {
//                     alert(data["errors"].map(error => error["message"]).join(", "));
//                 } else {
//                     alert(`An Unexpected Error Happened Please Connect to Insta: kpa_143`);
//                 }
//             });
//         }
//     }).catch(error => {
//         alert(`An Unexpected Error Happened Please Connect to Insta: kpa_143`);
//     });

//     document.getElementById('contact-form').reset();
// });


const form = document.getElementById('contact-form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = `Please wait...`;
    if(result.innerHTML.trim()){
        result.style.display = "block";
    }else{
        result.style.display = "none";
    }

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                // result.innerHTML = `Order Placed Successfully!!
                //                     We Will Reach You Soon..`;
                result.innerHTML = Swal.fire({
                    title: "Order Placed!!",
                    text: "Thank You For Your Order..",
                    imageUrl: "https://unsplash.it/400/200",
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: "Custom image"
                });
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = `Something Went Wrong!`;
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 5000);
        });
});
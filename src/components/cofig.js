const url = 'https://reqres.in/api/users?';

export async function getuser(page) {
    const user = fetch(`${url}page =${page}`)
        .then(res => res.json())
        .catch((err) => {
            console.log("Api Error !!!",err.message);
        })
        return user;
}
const setVersionAndYear = async () => {
    const res = await fetch('https://api.github.com/repos/daveknights/cre8bit/tags');
    const json = await res.json();
    const version =  json[0].name;

    document.querySelector('.v-btn').textContent = version;
    document.querySelector('.v-footer').textContent = version;
    document.querySelector('.year').textContent = new Date().getFullYear();
};

setVersionAndYear();
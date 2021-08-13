let users;


const renderFrontPageList = async () => {
    const response = await fetch('/api/users');
    users = await response.json();
    renderDetailPageList();
}

const renderDetailPageList = () => {
    const hash = parseInt(window.location.hash.slice(1));
}
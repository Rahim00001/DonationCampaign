
const getStoredDonations = () => {
    const storedDonation = localStorage.getItem('my-donations');
    if (storedDonation) {
        return JSON.parse(storedDonation);
    }
    return [];
}
const saveDonations = id => {
    const storedDonations = getStoredDonations();
    const exists = storedDonations.find(donationId => donationId == id);
    if (!exists) {
        storedDonations.push(id);
        localStorage.setItem('my-donations', JSON.stringify(storedDonations))
    }
}
export { getStoredDonations, saveDonations }
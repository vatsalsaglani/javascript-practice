let restaurant = {
    name: 'Amb',
    guestCapacity: 75,
    guestCount: 0,
    // method
    checkAvailability: function(partySize){
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function(partySize){
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function(partySize){
        this.guestCount = this.guestCount - partySize
    }
}



// calling a function inside of a object i.e. a method.
restaurant.seatParty(70)
restaurant.removeParty(15)
let status = restaurant.checkAvailability(32)
console.log(status)
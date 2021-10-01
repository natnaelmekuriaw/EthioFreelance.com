import { mapGetters } from 'vuex'

export const authComputed = {
    ...mapGetters(['loggedIn'])
}
export const userIds = {
    ...mapGetters(['userId'])
}

export const searchedjobs = {
    ...mapGetters(['searchedjob'])
}

export const fullName = {
    ...mapGetters(['Name'])
}
export const profile_created = {
    ...mapGetters(['isprofile'])
}




export const userType = {
    ...mapGetters(['userRole'])
}
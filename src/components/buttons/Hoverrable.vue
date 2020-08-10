<template>
  <div class="q-pa-xl row justify-center">
<!--   Button component started here  -->
    <q-btn color="primary" @mouseover="closeMenu(true)" @mouseleave="closeMenu(false)"  icon-right="mail" label="">{{hello }} {{ stayOpen }}
<!--   Menu components started here  -->
      <q-menu v-model="hello" @mouseover="stayOpenMenu(true)" @mouseleave="stayOpenMenu(false)"  fit>
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section>New tab</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>New incognito tab</q-item-section>
              <q-separator />
            <q-item-section>Recent tabs</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>History</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Downloads</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Settings</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Help &amp; Feedback</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
       </q-btn>
    </div>
</template>

<script>
export default {
  data () {
    return {
      hello: false,
      stayOpen: false
    }
  },
  methods: {
    // closeMenu (val) {
    //   // setTimeout(() => this.mds(val), 100)
    //   this.mds(val)
    // },
    closeMenu (val) {
      if (val === true) {
        this.hello = true
      } else {
        if ((val === true && this.stayOpen === false)) {
          // setTimeout(() => { this.hello = false }, 1000)
          this.hello = false
        }
      }
    },
    // stayOpenMenu (val) {
    //   // setTimeout(() => this.espera(val), 500)
    //   this.espera(val)
    //   // if (val === 'open') {
    //   //   this.stayOpen = true
    //   // } else {
    //   //   this.stayOpen = false
    //   //   this.hello = false
    //   // }
    // },
    stayOpenMenu (val) {
      if (val === true) {
        this.stayOpen = true
      } else {
        this.stayOpen = false
        this.mds(val)
      }
    }
  }
}
</script>

<style>

</style>

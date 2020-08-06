<template>
  <div>
    <q-list v-for="(item, i) in items" :key="i">
      <q-expansion-item :duration="500" active="text-cyan-13" class="bg-blue-6" group="somegroup1" :icon="item.icon" :label="item.name" v-if="item.children" :to="item.to" exact>
        <!-- caption="5 unread emails" -->
        <q-list v-for="(ite, u) in item.children" :key="u" :to="item.to">
          <q-expansion-item :duration="500" active="text-cyan-13" class="bg-blue-5" group="somegroup2" :icon="ite.icon" :label="ite.name" v-if="ite.children" :to="ite.to" exact>
            <q-list v-for="(it, x) in ite.children" :key="x">
              <q-expansion-item :duration="500" active="text-cyan-13" class="bg-blue-4" group="somegroup3" :icon="it.icon" :label="it.name" v-if="it.children" :to="it.to" exact>
                <q-list v-for="(iz, u) in it.children" :key="u">
                  <q-expansion-item :duration="500" active="text-cyan-13" class="bg-blue-3" group="somegroup4" :icon="iz.icon" :label="iz.name" v-if="iz.children" :to="iz.to" exact>
                  </q-expansion-item>
                  <q-item v-else clickable v-ripple :active="active" class="bg-blue-3" :to="iz.to" exact>
                    <q-item-section avatar><q-icon :name="iz.icon"/></q-item-section>
                    <q-item-section>{{iz.name}}</q-item-section>
                  </q-item>
                </q-list>
              </q-expansion-item>
              <q-item v-else exact-active-class="text-cyan-13" clickable v-ripple :active="active" class="bg-blue-4" :to="it.to" exact>
                <q-item-section avatar><q-icon :name="it.icon"/></q-item-section>
                <q-item-section>{{it.name}}</q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
          <q-item v-else exact-active-class="text-cyan-13" clickable v-ripple :active="active" class="bg-blue-5" :to="ite.to" exact>
            <q-item-section avatar><q-icon :name="ite.icon"/></q-item-section>
            <q-item-section>{{ite.name}}</q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>
      <q-item v-else exact-active-class="text-cyan-13" clickable v-ripple :active="active" class="bg-blue-6" :to="item.to" exact>
        <q-item-section avatar><q-icon :name="item.icon"/></q-item-section>
        <q-item-section>{{item.name}}</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  components: {
    // DrawersOptions,
    // FooterOptions
  },
  data () {
    return {
      SecondRightDrawer: false,
      SecondLeftDrawer: false,
      clipped: false,
      absolute: false,
      admins: [
        ['Management', 'mdi-people-outline'],
        ['Settings', 'mdi-settings']
      ],
      cruds: [
        ['Create', 'mdi-add'],
        ['Read', 'mdi-insert-drive-file'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete']
      ],
      items: [
        {
          name: 'Pages',
          icon: 'mdi-chart-bubble',
          children: [
            {
              name: 'Home',
              icon: 'mdi-chart-bubble',
              to: '/'
            },
            {
              name: 'Services',
              icon: 'mdi-chart-bubble',
              to: '/services'
            },
            {
              name: 'About',
              icon: 'mdi-chart-bubble',
              to: '/about'
            },
            {
              name: 'Doubts',
              icon: 'mdi-chart-bubble',
              to: '/doubts'
            }
          ]
        },
        {
          name: 'Layouts',
          icon: 'mdi-chart-bubble',
          children: [
            {
              name: 'Layout1',
              icon: 'mdi-chart-bubble',
              children: [
                {
                  name: 'App Bar',
                  icon: 'mdi-chart-bubble',
                  to: '/premade-layouts/app-bar-1'
                },
                {
                  name: 'Drawer',
                  icon: 'mdi-chart-bubble',
                  to: '/premade-layouts/drawer-1'
                }
              ]
            },
            {
              name: 'Layout2',
              icon: 'mdi-chart-bubble',
              children: [
                {
                  name: 'App Bar',
                  icon: 'mdi-chart-bubble',
                  to: '/premade-layouts/app-bar-1'
                },
                {
                  name: 'Drawer',
                  icon: 'mdi-chart-bubble',
                  to: '/premade-layouts/drawer-1'
                }
              ]
            }
          ]
        }
        // {
        //   name: 'Layouts2',
        //   icon: 'mdi-chart-bubble',
        //   children: [
        //     {
        //       name: 'Layout1',
        //       icon: 'mdi-chart-bubble',
        //       to: '/',
        //       children: [
        //         {
        //           name: 'Documents :',
        //           icon: 'mdi-chart-bubble',
        //           to: '/',
        //           children: [
        //             {
        //               name: 'Documents :',
        //               icon: 'mdi-chart-bubble',
        //               to: '/'
        //             },
        //             {
        //               name: 'Documents :',
        //               icon: 'mdi-chart-bubble',
        //               to: '/'
        //             }
        //           ]
        //         }
        //       ]
        //     },
        //     {
        //       name: 'Layout2',
        //       icon: 'mdi-chart-bubble',
        //       to: '/',
        //       children: [
        //         {
        //           name: 'Documents :',
        //           icon: 'mdi-chart-bubble',
        //           to: '/',
        //           children: [
        //             {
        //               name: 'Documents :',
        //               icon: 'mdi-chart-bubble',
        //               to: '/'
        //             },
        //             {
        //               name: 'Documents :',
        //               icon: 'mdi-chart-bubble',
        //               to: '/'
        //             },
        //             {
        //               name: 'Documents :',
        //               icon: 'mdi-chart-bubble',
        //               to: '/'
        //             }
        //           ]
        //         }
        //       ]
        //     }
        //   ]
        // },
        // {
        //   name: 'Documents',
        //   icon: 'mdi-chart-bubble',
        //   children: [
        //     {
        //       name: 'Documents :',
        //       icon: 'mdi-chart-bubble',
        //       to: '/'
        //     },
        //     {
        //       name: 'Documents :',
        //       icon: 'mdi-chart-bubble',
        //       to: '/'
        //     },
        //     {
        //       name: 'Documents :',
        //       icon: 'mdi-chart-bubble',
        //       to: '/'
        //     }
        //   ]
        // },
        // {
        //   name: 'Documents 2',
        //   icon: 'mdi-chart-bubble',
        //   children: [
        //     {
        //       name: 'Tutorials :',
        //       children: [
        //         {
        //           name: 'Documents :',
        //           icon: 'mdi-chart-bubble',
        //           to: '/'
        //         },
        //         {
        //           name: 'Documents :',
        //           icon: 'mdi-chart-bubble',
        //           to: '/'
        //         },
        //         {
        //           name: 'Documents :',
        //           icon: 'mdi-chart-bubble',
        //           to: '/'
        //         }
        //       ]
        //     },
        //     {
        //       name: 'Documents :',
        //       icon: 'mdi-chart-bubble',
        //       to: '/'
        //     },
        //     {
        //       name: 'Documents :',
        //       icon: 'mdi-chart-bubble',
        //       to: '/'
        //     }
        //   ]
        // }
      ]
    }
  }
}
</script>

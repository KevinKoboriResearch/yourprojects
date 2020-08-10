<template>
  <div>
    <!-- <q-expansion-item :duration="800" active="text-cyan-13" class="bg-grey-10 text-white" group="group" label="Alinhamento"> -->
      <DynamicButton>
        <!-- <q-list>
        </q-list> -->
      </DynamicButton>
      <Hoverrable/>
    <!-- </q-expansion-item> -->
    <q-list v-for="(item, i) in items" :key="i">
      <q-expansion-item :duration="500" active="text-cyan-13" class="bg-white text-grey-10" group="somegroup1" :label="item.name" v-if="item.children" :to="item.to" exact>
        <q-list v-for="(ite, u) in item.children" :key="u" :to="item.to">
          <q-expansion-item :duration="500" active="text-cyan-13" class="bg-grey-10 text-white" group="somegroup2" :label="ite.name" v-if="ite.children" :to="ite.to" exact>
            <q-list v-for="(it, x) in ite.children" :key="x">
              <q-expansion-item :duration="500" active="text-cyan-13" class="bg-grey-9 text-white" group="somegroup3" :label="it.name" v-if="it.children" :to="it.to" exact>
                <q-list v-for="(iz, u) in it.children" :key="u">
                  <q-expansion-item :duration="500" active="text-cyan-13" class="bg-grey-8 text-white" group="somegroup4" :label="iz.name" v-if="iz.children" :to="iz.to" exact>
                  </q-expansion-item>
                  <q-item v-else exact-active-class="text-cyan-13" clickable v-ripple :active="active" class="bg-grey-9 text-white" :to="iz.to" exact>
                    <q-item-section>{{iz.name}}</q-item-section>
                  </q-item>
                </q-list>
              </q-expansion-item>
              <q-item v-else exact-active-class="text-cyan-13" clickable v-ripple :active="active" class="bg-grey-9 text-white" :to="it.to" exact>
                <q-item-section>{{it.name}}</q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
          <q-item v-else exact-active-class="text-cyan-13" clickable v-ripple :active="active" class="bg-grey-10 text-white" :to="ite.to" exact>
            <q-item-section>{{ite.name}}</q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>
      <q-item v-else exact-active-class="text-cyan-13" clickable v-ripple :active="active" class="bg-white text-black" :to="item.to" exact>
        <q-item-section>{{item.name}}</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import DynamicButton from '../buttons/DynamicButton'
import Hoverrable from '../buttons/Hoverrable'
export default {
  components: {
    DynamicButton,
    Hoverrable
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
          name: 'Vuetify',
          icon: 'mdi-vuetify',
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
          name: 'Quasar',
          icon: 'mdi-vuejs',
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
        },
        {
          name: 'Bootstrap',
          icon: 'mdi-chart-bubble',
          children: [
            {
              name: 'Layout1',
              icon: 'mdi-chart-bubble',
              to: '/',
              children: [
                {
                  name: 'Documents :',
                  icon: 'mdi-chart-bubble',
                  to: '/',
                  children: [
                    {
                      name: 'Documents :',
                      icon: 'mdi-chart-bubble',
                      to: '/'
                    },
                    {
                      name: 'Documents :',
                      icon: 'mdi-chart-bubble',
                      to: '/'
                    }
                  ]
                }
              ]
            },
            {
              name: 'Layout2',
              icon: 'mdi-chart-bubble',
              to: '/',
              children: [
                {
                  name: 'Documents :',
                  icon: 'mdi-chart-bubble',
                  to: '/',
                  children: [
                    {
                      name: 'Documents :',
                      icon: 'mdi-chart-bubble',
                      to: '/'
                    },
                    {
                      name: 'Documents :',
                      icon: 'mdi-chart-bubble',
                      to: '/'
                    },
                    {
                      name: 'Documents :',
                      icon: 'mdi-chart-bubble',
                      to: '/'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'Electron',
          icon: 'mdi-electron-framework',
          children: [
            {
              name: 'Documents :',
              icon: 'mdi-chart-bubble',
              to: '/'
            },
            {
              name: 'Documents :',
              icon: 'mdi-chart-bubble',
              to: '/'
            },
            {
              name: 'Documents :',
              icon: 'mdi-chart-bubble',
              to: '/'
            }
          ]
        },
        {
          name: 'Documents 2',
          icon: 'mdi-semantic-web',
          children: [
            {
              name: 'Tutorials :',
              children: [
                {
                  name: 'Documents :',
                  icon: 'mdi-chart-bubble',
                  to: '/'
                },
                {
                  name: 'Documents :',
                  icon: 'mdi-chart-bubble',
                  to: '/'
                },
                {
                  name: 'Documents :',
                  icon: 'mdi-chart-bubble',
                  to: '/'
                }
              ]
            },
            {
              name: 'Documents :',
              icon: 'mdi-semantic-web',
              to: '/'
            },
            {
              name: 'Documents :',
              icon: 'mdi-chart-bubble',
              to: '/'
            }
          ]
        }
      ]
    }
  }
}
</script>

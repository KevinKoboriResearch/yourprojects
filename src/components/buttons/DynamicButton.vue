<template>
  <div>
    <q-btn
      @click="actionButton()"
      :align="alignVal"
      :disable="disable"
      :flat="flat"
      :glossy="glossy"
      :label="textLeftIconRight"
      :loading="progress"
      :no-caps="!caps"
      :outline="outline"
      :padding="padding"
      :push="push"
      :round="round"
      :stack="stackVal"
      :size="size === 'customSize' ? customSize + 'px' : size"
      :style="'background-color: ' + bgColor + '; color: ' + color + ';' +
      'border-top-left-radius: ' + edge1 + 'px; border-top-right-radius: ' + edge2 +
      'px; border-bottom-left-radius: ' + edge3 + 'px; border-bottom-right-radius: ' + edge4 + 'px;'"
    >
      <q-tooltip v-if="tooltip" :content-class="'bg-' + tooltipQuasarColor">
        I'm a tooltip
      </q-tooltip>
      <q-icon v-if="iconBody"
        :left="iconBodyLeft"
        :right="iconBodyRight"
        :name="iconBodyName"
        :size="iconBodySizeNum + 'px'" />
      <div v-if="textRightIconLeft">
        {{ textVal }}
      </div>
      <template v-if="spinnerGif" v-slot:loading>
        <div v-if="!loadingTextRight">
          {{ loadingText }}
        </div>
          <q-spinner v-if="spinnerGif == ''"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
          <q-spinner-radio v-if="spinnerGif == 'radio'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
          <q-spinner-hourglass v-if="spinnerGif == 'hourglass'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
          <q-spinner-facebook v-if="spinnerGif == 'facebook'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />

          <q-spinner-gears v-if="spinnerGif == 'gears'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
          <q-spinner-audio v-if="spinnerGif == 'audio'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
          <q-spinner-ball v-if="spinnerGif == 'ball'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
          <q-spinner-bars v-if="spinnerGif == 'bars'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />

          <q-spinner-comment v-if="spinnerGif == 'comment'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
          <q-spinner-cube v-if="spinnerGif == 'cube'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
          <q-spinner-dots v-if="spinnerGif == 'dots'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
          <q-spinner-grid v-if="spinnerGif == 'grid'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />

          <q-spinner-hearts v-if="spinnerGif == 'hearts'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
          <q-spinner-infinity v-if="spinnerGif == 'infinity'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
          <q-spinner-ios v-if="spinnerGif == 'ios'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
          <q-spinner-oval v-if="spinnerGif == 'oval'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />

          <q-spinner-pie v-if="spinnerGif == 'pie'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
          <q-spinner-puff v-if="spinnerGif == 'puff'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
          <q-spinner-rings v-if="spinnerGif == 'rings'" @click.stop="actionButton()"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
          <q-spinner-tail v-if="spinnerGif == 'tail'"
            :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />

        <div v-if="loadingTextRight">
          {{ loadingText }}
        </div>
      </template>
    </q-btn>
    <q-dialog v-model="prompt">
      <q-card style="min-width: 300px;" square class="text-start bg-white">
        <q-card-section class="bg-grey-10">
          <div class="q-pb-xm text-center">
            <q-btn
              @click="progress = !progress"
              :align="alignVal"
              :flat="flat"
              :disable="disable"
              :glossy="glossy"
              :label="textLeftIconRight"
              :loading="progress"
              :no-caps="!caps"
              :outline="outline"
              :push="push"
              :padding="padding"
              :round="round"
              :stack="stackVal"
              :size="size === 'customSize' ? customSize + 'px' : size"
              :style="'background-color: ' + bgColor + '; color: ' + color + ';' +
              'border-top-left-radius: ' + edge1 + 'px; border-top-right-radius: ' + edge2 +
              'px; border-bottom-left-radius: ' + edge3 + 'px; border-bottom-right-radius: ' + edge4 + 'px;'"
            >
              <q-tooltip v-if="tooltip" :content-class="'bg-' + tooltipQuasarColor">
                I'm a tooltip
              </q-tooltip>
              <q-icon v-if="iconBody"
                :left="iconBodyLeft"
                :right="iconBodyRight"
                :name="iconBodyName"
                :size="iconBodySizeNum + 'px'" />
              <div v-if="textRightIconLeft">
                {{ textVal }}
              </div>
              <template v-if="spinnerGif" v-slot:loading>
                <div v-if="!loadingTextRight">
                  {{ loadingText }}
                </div>
                  <q-spinner v-if="spinnerGif == ''"
                    :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
                  <q-spinner-radio v-if="spinnerGif == 'radio'"
                    :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
                  <q-spinner-hourglass v-if="spinnerGif == 'hourglass'"
                    :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
                  <q-spinner-facebook v-if="spinnerGif == 'facebook'"
                    :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />

                  <q-spinner-gears v-if="spinnerGif == 'gears'"
                    :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
                  <q-spinner-audio v-if="spinnerGif == 'audio'"
                    :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
                  <q-spinner-ball v-if="spinnerGif == 'ball'"
                    :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
                  <q-spinner-bars v-if="spinnerGif == 'bars'"
                    :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />

                  <q-spinner-comment v-if="spinnerGif == 'comment'"
                    :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
                  <q-spinner-cube v-if="spinnerGif == 'cube'"
                    :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
                  <q-spinner-dots v-if="spinnerGif == 'dots'"
                    :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
                  <q-spinner-grid v-if="spinnerGif == 'grid'"
                    :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />

                  <q-spinner-hearts v-if="spinnerGif == 'hearts'"
                    :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
                  <q-spinner-infinity v-if="spinnerGif == 'infinity'"
                    :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
                  <q-spinner-ios v-if="spinnerGif == 'ios'"
                    :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
                  <q-spinner-oval v-if="spinnerGif == 'oval'"
                    :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />

                  <q-spinner-pie v-if="spinnerGif == 'pie'"
                    :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
                  <q-spinner-puff v-if="spinnerGif == 'puff'"
                    :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
                  <q-spinner-rings v-if="spinnerGif == 'rings'"
                    :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />
                  <q-spinner-tail v-if="spinnerGif == 'tail'"
                    :size="iconBody ? iconBodySizeNum + 'px' : '1em'" />

                <div v-if="loadingTextRight">
                  {{ loadingText }}
                </div>
              </template>
            </q-btn>
            <div>
              <br>
              <q-btn v-if="progress" :disable="!progress" color="deep-purple-6" @click="progress = false" label="Stop" />
            </div>
          </div>
        </q-card-section >
        <q-expansion-item :duration="800" active="text-cyan-13" class="bg-grey-10 text-white" group="group" label="Loading">
          <q-card-section class="text-cyan-13 text-h6">
            Clique Sobre o botão
          </q-card-section>
          <div>
            <div class="row">
              <q-radio dark v-model="spinnerGif" val="" label="default" color="cyan" />
              <q-radio dark v-model="spinnerGif" val="radio" label="radio" color="cyan" />
              <q-radio dark v-model="spinnerGif" val="hourglass" label="hourglass" color="cyan" />
              <q-radio dark v-model="spinnerGif" val="facebook" label="facebook" color="cyan" />
            </div>
            <div class="row">
              <q-radio dark v-model="spinnerGif" val="audio" label="audio" color="cyan" />
              <q-radio dark v-model="spinnerGif" val="ball" label="ball" color="cyan" />
              <q-radio dark v-model="spinnerGif" val="bars" label="bars" color="cyan" />
              <q-radio dark v-model="spinnerGif" val="comment" label="comment" color="cyan" />
            </div>
            <div class="row">
              <q-radio dark v-model="spinnerGif" val="cube" label="cube" color="cyan" />
              <q-radio dark v-model="spinnerGif" val="dots" label="dots" color="cyan" />
              <q-radio dark v-model="spinnerGif" val="grid" label="grid" color="cyan" />
              <q-radio dark v-model="spinnerGif" val="hearts" label="hearts" color="cyan" />
            </div>
            <div class="row">
              <q-radio dark v-model="spinnerGif" val="infinity" label="infinity" color="cyan" />
              <q-radio dark v-model="spinnerGif" val="ios" label="ios" color="cyan" />
              <q-radio dark v-model="spinnerGif" val="oval" label="oval" color="cyan" />
              <q-radio dark v-model="spinnerGif" val="pie" label="pie" color="cyan" />
            </div>
            <div class="row">
              <q-radio dark v-model="spinnerGif" val="puff" label="puff" color="cyan" />
              <q-radio dark v-model="spinnerGif" val="rings" label="rings" color="cyan" />
              <q-radio dark v-model="spinnerGif" val="tail" label="tail" color="cyan" />
            </div>
          </div>
          <q-card-section class="text-cyan-13 text-h6">
            Posicao
          </q-card-section>
            <div class="row">
              <q-radio color="cyan" dark v-model="loadingTextRight" :val="false" label="Esquerda" />
            </div>
            <div class="row">
              <q-radio color="cyan" dark v-model="loadingTextRight" :val="true" label="Direita" />
            </div>
          </q-expansion-item>
        <q-expansion-item :duration="800" active="text-cyan-13" class="bg-grey-10 text-white" group="group" label="texto">
        <div class="q-pa-sm">
          <q-card-section>
            <q-input dark dense standout v-model="text">
              <template v-slot:append>
                <q-icon name="clear" class="cursor-pointer" @click="text = ''" />
              </template>
            </q-input>
          </q-card-section>
          <q-card-section class="text-cyan-13 text-h6">
            <div class="row">
              <div class="col-6">
                Capslock
              </div>
                <div class="col-6">
                  <q-checkbox color="cyan" v-model="caps" />
                </div>
              </div>
            </q-card-section>
          </div>
          </q-expansion-item>
          <q-expansion-item :duration="800" active="text-cyan-13" class="bg-grey-10 text-white" group="group" label="Estilo">
            <q-card-section class="text-cyan-13 text-h6">
            <div class="row">
              <div class="col-6">
                Glossy
              </div>
                <div class="col-6">
                  <q-checkbox color="cyan" v-model="glossy" />
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  Disable
                </div>
                <div class="col-6">
                  <q-checkbox color="cyan" v-model="disable" />
                </div>
              </div>
             <div class="row">
                <div class="col-6">
                  Tooltip
                </div>
                <div class="col-6">
                  <q-checkbox color="cyan" v-model="tooltip" />
                </div>
              </div>
              <div v-if="tooltip" class="row">
                <div class="col-6">
                  Cor do Tooltip
                </div>
                <div class="col-6">
                  Cor do Tooltip
                </div>
              </div>
            </q-card-section>
          </q-expansion-item>
          <q-expansion-item :duration="800" active="text-cyan-13" class="bg-grey-10 text-white" group="group" label="Icone">
            <q-card-section class="text-cyan-13 text-h6">
              <div class="row">
                <div class="col-6">
                  Icone
                </div>
                <div class="col-6">
                  <q-checkbox color="cyan" v-model="iconBody" />
                </div>
              </div>
              <q-card-section v-if="iconBody">
                <a href="https://materialdesignicons.com/">Lista de Icones Aqui!</a>
                <q-input label="mdi-..." label-color="deep-purple-5" dark dense standout v-model="iconBodyName">
                  <template v-slot:append>
                    <q-icon name="clear" class="cursor-pointer" @click="iconBodyName = ''" />
                  </template>
                </q-input>
              </q-card-section>
            </q-card-section>
            <div class="row">
              <div class="col-6">
                Posição do Icone
              </div>
              <div class="col-6">
                Posição do Texto
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="row">
                  <q-radio color="cyan" dark v-model="iconBodyDirection" val="left" label="Esquerda" />
                </div>
                <div class="row">
                  <q-radio color="cyan" dark v-model="iconBodyDirection" val="center" label="Centro" />
                </div>
                <div class="row">
                  <q-radio color="cyan" dark v-model="iconBodyDirection" val="right" label="Direita" />
                </div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <q-radio color="cyan" dark v-model="textDirection" val="left" label="Esquerda" />
                  </div>
                  <div class="row">
                <q-radio color="cyan" dark v-model="textDirection" val="right" label="Direita" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              Icone
            </div>
            <div class="col-6">
              <q-checkbox color="cyan" v-model="iconBodySize" />
            </div>
          </div>
          <div class="q-gutter-sm">
            <q-slider
              v-if="iconBodySize"
              v-model="iconBodySizeNum"
              label-always
              markers
              :label-value="iconBodySizeNum + 'px'"
              :min="0"
              :max="150"
              :step="5"
            />
          </div>
          </q-expansion-item>
          <q-expansion-item :duration="800" active="text-cyan-13" class="bg-grey-10 text-white" group="group" label="cor">
          <div class="q-pa-sm">
            <q-card-section>
              <div class="text-cyan-13 text-h6">
                Estilo
              </div>
            </q-card-section>
            <div class="row">
              <q-radio color="cyan" dark v-model="flatOutline" val="flat" label="Liso" />
            </div>
            <div class="row">
              <q-radio color="cyan" dark v-model="flatOutline" val="default" label="Com Fundo" />
            </div>
            <div class="row">
              <q-radio color="cyan" dark v-model="flatOutline" val="push" label="Push" />
            </div>
            <div class="row">
              <q-radio color="cyan" dark v-model="flatOutline" val="outline" label="Com Borda / Sem Fundo" />
            </div>
            <div v-if="!outline">
              <q-card-section class="text-cyan-13 text-h6">
                Cor de Fundo
              </q-card-section>
              <q-color default-view="palette" :palette="palette" v-model="bgColor" />
            </div>
            <q-card-section class="text-cyan-13 text-h6">
              Cor do texto
            </q-card-section>
            <q-color default-view="palette" :palette="palette" v-model="color" />
          </div>
          </q-expansion-item>
          <q-expansion-item :duration="800" active="text-cyan-13" class="bg-grey-10 text-white" group="group" label="Tamanho">
            <div class="q-pa-sm">
              <q-card-section>
                <div class="text-cyan-13 text-h6">
                  Tamanho
                </div>
                </q-card-section>
                <div class="row">
                  <div class="col-6">
                    <q-radio color="cyan" dark v-model="size" val="xs" label="Muito Pequeno" />
                  </div>
                  <div class="col-6">
                    <q-radio color="cyan" dark v-model="size" val="sm" label="Pequeno" />
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <q-radio color="cyan" dark v-model="size" val="md" label="Médio" />
                  </div>
                  <div class="col-6">
                    <q-radio color="cyan" dark v-model="size" val="lg" label="Grande" />
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <q-radio color="cyan" dark v-model="size" val="xl" label="Muito Grande" />
                  </div>
                  <div class="col-6">
                    <q-radio color="cyan" dark v-model="size" val="customSize" label="Customizado" />
                  </div>
                </div>
                <div class="q-gutter-sm">
                  <q-slider
                    v-if="size=='customSize'"
                    v-model="customSize"
                    label-always
                    markers
                    :label-value="customSize + 'px'"
                    :min="0"
                    :max="150"
                    :step="5"
                  />
                </div>
              </div>
            </q-expansion-item>
            <q-expansion-item :duration="800" active="text-cyan-13" class="bg-grey-10 text-white" group="group" label="Padding">
            <div class="q-pa-sm">
              <div class="row">
                <q-card-section>
                  <div class="text-cyan-13 text-h6">
                    Altura
                  </div>
                </q-card-section>
                <div class="col-6">
                  <q-card-section>
                    <div class="text-cyan-13 text-h6">
                      Largura
                    </div>
                  </q-card-section>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <q-radio color="cyan" dark v-model="height" val="" label="Nada" />
                </div>
                <div class="col-6">
                  <q-radio color="light-green" dark v-model="width" val="" label="Nada" />
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <q-radio color="cyan" dark v-model="height" val="xs" label="Muito Pequeno" />
                </div>
                <div class="col-6">
                  <q-radio color="light-green" dark v-model="width" val="xs" label="Muito Pequeno" />
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <q-radio color="cyan" dark v-model="height" val="sm" label="Pequeno" />
                </div>
                <div class="col-6">
                  <q-radio color="light-green" dark v-model="width" val="sm" label="Pequeno" />
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <q-radio color="cyan" dark v-model="height" val="md" label="Médio" />
                </div>
                <div class="col-6">
                  <q-radio color="light-green" dark v-model="width" val="md" label="Médio" />
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <q-radio color="cyan" dark v-model="height" val="lg" label="Grande" />
                </div>
                <div class="col-6">
                  <q-radio color="light-green" dark v-model="width" val="lg" label="Grande" />
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <q-radio color="cyan" dark v-model="height" val="xl" label="Muito Grande" />
                </div>
                <div class="col-6">
                  <q-radio color="light-green" dark v-model="width" val="xl" label="Muito Grande" />
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <q-radio color="cyan" dark v-model="height" val="customHeight" label="Customizado" />
                </div>
                <div class="col-6">
                  <q-radio color="light-green" dark v-model="width" val="customWidth" label="Customizado" />
                </div>
              </div>
              <q-slider
                v-if="height == 'customHeight'"
                v-model="heightNum"
                label-always
                color="cyan"
                :label-value="heightNum + 'px'"
                :min="0"
                :max="150"
                :step="5"
              />
              <br>
              <q-slider
              v-if="width == 'customWidth'"
                v-model="widthNum"
                label-always
                color="light-green"
                :label-value="widthNum + 'px'"
                :min="0"
                :max="150"
                :step="5"
              />
            </div>
          </q-expansion-item>
          <q-expansion-item :duration="800" active="text-cyan-13" class="bg-grey-10 text-white" group="group" label="Alinhamento">
            <div>
              <q-radio dark v-model="align" val="around" label="Justificado" color="cyan" />
              <q-radio dark v-model="align" val="between" label="Entre" color="cyan" />
              <q-radio dark v-model="align" val="left" label="Esquerda" color="cyan" />
              <q-radio dark v-model="align" val="right" label="Direita" color="cyan" />
              <q-radio dark v-model="align" val="stack" label="Empilhado" color="cyan" />
            </div>
          </q-expansion-item>
          <q-expansion-item :duration="800" active="text-cyan-13" class="bg-grey-10 text-white" group="group" label="Borda">
            <div class="q-pa-sm">    <q-card-section>
              <div class="text-cyan-13 text-h6">
                Cor do texto e da borda
              </div>
            </q-card-section>
            <div>
              <q-radio dark v-model="buttonBorder" val="default" label="default" color="cyan" />
              <q-radio dark v-model="buttonBorder" val="round" label="round" color="cyan" />
              <q-radio dark v-model="buttonBorder" val="square" label="square" color="cyan" />
              <q-radio dark v-model="buttonBorder" val="border" label="custom" color="cyan" />
            </div>
            <div v-if='border'>
              <q-slider
                v-model="edge1"
                label-always
                color="cyan"
                :label-value="edge1 + 'px'"
                :min="0"
                :max="200"
                :step="5"
              />
              <br>
              <q-slider
                v-model="edge2"
                label-always
                color="cyan"
                :label-value="edge2 + 'px'"
                :min="0"
                :max="200"
                :step="5"
              />
              <br>
              <q-slider
                v-model="edge3"
                label-always
                color="cyan"
                :label-value="edge3 + 'px'"
                :min="0"
                :max="200"
                :step="5"
              />
              <br>
              <q-slider
                v-model="edge4"
                label-always
                color="cyan"
                :label-value="edge4 + 'px'"
                :min="0"
                :max="200"
                :step="5"
              />
            </div>
          </div>
        </q-expansion-item>
        <q-card-actions align="right" class="text-deep-purple-5 bg-grey-10">
          <q-btn flat label="Fechar" v-close-popup />
        </q-card-actions>
      </q-card>
      <q-card class="bg-white" style="min-width: 120px;">
        <br>
        {{ prompt }}
        <br>
        {{ textVal }}
        <br>
        {{ caps }}
        <br>
        {{ outline }}
        <br>
        {{ bgColor }}
        <br>
        {{ color }}
        <br>
        <br>
        {{ round }}
        <br>
        {{ square }}
        <br>
        {{ border }}
        <br>
        {{ borderVal }}
        <br>
        {{ customSize }}
        <br>
        {{ glossy }}
        <br>
        {{ push }}
        <br>
        {{ disable }}
        <br>
        {{ size }}
        <br>
        {{ edge1 }}
        <br>
        {{ edge2 }}
        <br>
        {{ edge3 }}
        <br>
        {{ edge4 }}
        <br>
        {{ flatOutlineVal }}
        <br>
        {{ flat }}
        <br>
        {{ height }}
        <br>
        {{ width }}
        <br>
        {{ heightNum }}
        <br>
        {{ widthNum }}
        <br>
        {{ tooltip }}
        <br>
        {{ tooltipQuasarColor }}
        <br>
        {{ alignVal }}
        <br>
        {{ iconBody }}
        <br>
        {{ iconBodyName }}
        <br>
        {{ stackVal }}
        <br>
        {{ iconTagLeft }}
        <br>
        {{ iconTagRight }}
        <br>
        {{ iconTagNameLeft }}
        <br>
        {{ iconTagNameRight }}
        <br>
        {{ fullWidth }}
        <br>
        {{ textDirectionVal }}
        <br>
        {{ textRightIconLeft }}
        <br>
        {{ textLeftIconRight }}
        <br>
        {{ iconBodyLeft }}
        <br>
        {{ iconBodyRight }}
        <br>
        {{ iconBodySizeVal }}
        <br>
        {{ iconBodySizeNum }}
        <br>
        {{ iconBodySizeNumVal }}
        <br>
        {{ progress }}
        <br>
        {{ spinnerGifVal }}
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // q-btn
      alignVal: 'around', // 1
      disable: false, // 2
      flat: false, // 3
      glossy: false, // 4
      textLeftIconRight: '', // 5
      progress: true, // 6
      caps: true, // 7
      outline: true, // 8
      // 9
      push: false, // 10
      round: false, // 11
      stackVal: true, // 12
      size: 'md', // 13
      customSize: 40, // 14
      bgColor: '#FFFFFFFF', // 15
      color: '#6300d4ff', // 16
      edge1: 0, // 17
      edge2: 0, // 18
      edge3: 0, // 19
      edge4: 0, // 20
      tooltip: false, // 21
      tooltipQuasarColor: 'accent', // 22
      iconBody: true, // 23
      iconBodyLeft: false, // 24
      iconBodyName: 'mdi-vuejs', // 25
      iconBodyRight: false, // 26
      iconBodySizeNum: 70, // 27
      textRightIconLeft: 'Clique Aqui', // 28
      textVal: 'Edite Aqui', // 29
      // 30
      loadingTextRight: true, // 31
      loadingText: 'Esperando...', // 32
      prompt: false, // 33

      // options
      border: false,
      borderVal: 'custom',
      default: false,
      flatOutlineVal: 'default',
      fullWidth: false,
      height: 'xs',
      heightNum: 20,
      iconTagLeft: false,
      iconTagRight: false,
      iconBodySizeVal: false,
      iconTagNameLeft: 'none',
      iconTagNameRight: 'none',
      iconBodySizeNumVal: '',
      palette: ['#FFFFFFFF', '#F2C037FF', '#21BA45FF', '#26A69AFF', '#31CCECFF', '#1976D2FF', '#ff00ffFF', '#9C27B0FF', '#C10015FF', '#000000FF'],
      spinnerGifVal: 'puff',
      square: false,
      textDirectionVal: 'right',
      width: 'md',
      widthNum: 20
    }
  },
  methods: {
    actionButton () {
      if (this.progress === true && this.prompt === false) {
        this.progress = false
        this.prompt = false
      } else if (this.progress === false && this.prompt === false) {
        this.prompt = true
        this.progress = false
      } else {
        this.progress = true
        this.prompt = false
      }
    }
  },
  computed: {
    padding: { // 9
      get () {
        if (this.height === 'customHeight' && this.width === 'customWidth') {
          return this.heightNum + 'px ' + this.widthNum + 'px'
        } else if (this.height === 'customHeight' && this.width !== 'customWidth') {
          return this.heightNum + 'px ' + this.width
        } else if (this.height !== 'customHeight' && this.width === 'customWidth') {
          return this.height + ' ' + this.widthNum + 'px'
        } else {
          return this.height + ' ' + this.width
        }
      }
    },
    spinnerGif: { // 30
      get () {
        return this.spinnerGifVal
      },
      set (val) {
        this.spinnerGifVal = val
      }
    },
    iconBodySize: {
      get () {
        return this.iconBodySizeVal
      },
      set (val) {
        this.iconBodySizeVal = val
        if (val === false) {
          this.iconBodySizeNum = 25
        }
      }
    },
    iconBodyDirection: {
      get () {
        return this.iconBodyDirectionVal
      },
      set (val) {
        if (val === 'right') {
          this.iconBodyLeft = this.textVal
          this.iconBodyRight = ''
        } else if (val === 'center') {
          this.iconBodyLeft = ''
          this.iconBodyRight = ''
        } else {
          this.iconBodyLeft = ''
          this.iconBodyRight = this.textVal
        }
        this.iconBodyDirectionVal = val
      }
    },
    text: {
      get () {
        return this.textVal
      },
      set (val) {
        if (this.textDirectionVal === 'right') {
          this.textLeftIconRight = ''
          this.textRightIconLeft = this.textVal
        } else {
          this.textLeftIconRight = this.textVal
          this.textRightIconLeft = ''
        }
        this.textVal = val
      }
    },
    textDirection: {
      get () {
        return this.textDirectionVal
      },
      set (val) {
        if (val === 'right') {
          this.textLeftIconRight = ''
          this.textRightIconLeft = this.textVal
        } else {
          this.textLeftIconRight = this.textVal
          this.textRightIconLeft = ''
        }
        this.textDirectionVal = val
      }
    },
    align: {
      get () {
        if (this.alignVal === '') {
          return 'stack'
        } else {
          return this.alignVal
        }
      },
      set (val) {
        if (val === 'stack') {
          this.stackVal = true
          this.alignVal = ''
        } else {
          this.stackVal = false
          this.alignVal = val
        }
      }
    },
    flatOutline: {
      get () {
        return this.flatOutlineVal
      },
      set (val) {
        this.flatOutlineVal = val
        if (this.flatOutlineVal === 'default') {
          this.outline = false
          this.flat = false
          this.push = false
        } else if (this.flatOutlineVal === 'outline') {
          this.outline = true
          this.flat = false
          this.push = false
        } else if (this.flatOutlineVal === 'push') {
          this.push = true
          this.outline = false
          this.flat = false
        } else {
          this.flat = true
          this.outline = false
          this.push = false
        }
      }
    },
    buttonBorder: {
      get () {
        return this.borderVal
      },
      set (val) {
        this.borderVal = val
        if (this.borderVal === 'round') {
          this.round = true
          this.square = false
          this.default = false
          this.border = false
          this.edge1 = 25
          this.edge2 = 25
          this.edge3 = 25
          this.edge4 = 25
        } else if (this.borderVal === 'square') {
          this.square = true
          this.round = false
          this.default = false
          this.border = false
          this.edge1 = 0
          this.edge2 = 0
          this.edge3 = 0
          this.edge4 = 0
        } else if (this.borderVal === 'default') {
          this.default = true
          this.round = false
          this.square = false
          this.border = false
          this.edge1 = 5
          this.edge2 = 5
          this.edge3 = 5
          this.edge4 = 5
        } else {
          this.border = true
          this.round = false
          this.square = false
          this.default = false
        }
      }
    }
  }
}
</script>

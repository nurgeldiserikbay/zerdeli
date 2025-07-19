<script lang="ts" setup>
import ProfileAvatar from './ProfileAvatar.vue'
</script>

<template>
  <header class="pt-24px">
    <div class="container flex justify-between">
      <div>
        <div class="flex items-center gap-x-8px text-(12px #FFD6DD) font-(medium) leading-[1.5] mb-9px">
          <Icon name="my-icons:sun" class="w-15px h-15px" />
          <span>{{ 'GOOD MORNING' }}</span>
        </div>

        <div class="text-(18px white) font-(medium) leading-[1.5]">{{ 'Гүлжамал Серикбаева' }}</div>
      </div>
      <ProfileAvatar />
    </div>
  </header>
</template>
<template>
  <div class="task-grid">
    <template v-if="tasks.length">

        <Task v-for="(task, i) in tasks" :key="task.name" :task="task"
        @taskDeleted="$emit('taskDeleted', i)"
        @taskStateChanged="$emit('taskStateChanged', i)"></Task>
    </template>
    <p v-else class="no-tasks">Sua vida está em dia :)</p>
  </div>
</template>

<script>
import Task from '@/components/TaskApp.vue';
export default {
    props:{
        tasks:{type: Array, required: true}
    },
    components:{Task}
}
</script>

<style>
  .no-tasks {
    color: #AAA;
    font-size: 1.7rem;
  }

  .task-grid{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .task-grid .tasks{
    margin: 10px;
  }
</style>
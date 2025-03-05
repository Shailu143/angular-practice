import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  //@Output() cancel = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();
  //@Output() add = new EventEmitter<NewTaskData>();
  enteredTitle ='';
  enteredSummary='';
  enteredDate='';
  private taskService = inject(TasksService);

  onCancel(){
    //this.cancel.emit();
    this.close.emit();
  }

  onSubmit(){
    // this.add.emit({
    //   title: this.enteredTitle,
    //   summary: this.enteredSummary,
    //   date: this.enteredDate
    // });
    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
      },
      this.userId
    )
    this.close.emit();
  }
}

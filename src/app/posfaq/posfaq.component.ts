import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-posfaq',
  templateUrl: './posfaq.component.html',
  styleUrl: './posfaq.component.css',
})
export class PosfaqComponent {
  qaList = [
    {
      question: 'What is POS OptimaX ERP?',
      answer:
        'Inventory OptimaX ERP is a specialized software solution designed to enhance inventory management and overall operational efficiency for businesses.',
      expanded: false,
    },
    {
      question: 'Why use Inventory Optimax ERP?',
      answer:
        'Inventory OptimaX ERP is a software solution that helps businesses efficiently manage their inventory across multiple locations and sales channels.',
      expanded: false,
    },
    {
      question: 'How does Inventory Optimax ERP work?',
      answer:
        'Inventory OptimaX ERP works by providing a centralized software platform that helps businesses track and manage their inventory in real time.',
      expanded: false,
    },
    {
      question: 'What are the benefits of Inventory Optimax ERP?',
      answer:
        ' Inventory OptimaX ERP helps businesses optimize their inventory management processes, leading to increased efficiency, reduced costs, and enhanced customer satisfaction.',
      expanded: false,
    },
  ];

  toggleAnswer(item: any) {
    // Check if the clicked item is already expanded
    const isExpanded = item.expanded;

    // Close all questions
    this.qaList.forEach((q) => (q.expanded = false));

    // Toggle the clicked question
    item.expanded = !isExpanded;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.qa-item')) {
      this.closeAll();
    }
  }

  closeAll() {
    this.qaList.forEach((q) => (q.expanded = false));
  }
}

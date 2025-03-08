# Angular Components and Data Binding

## Components: The Building Blocks of Angular

Angular uses components as the Building Blocks of the application. It divides whole User Interface into multiple reusable parts called as components. components are used for reusability, modularity and flexibility in application.
providing:

- **Reusability**: Components can be used multiple times across the application
- **Modularity**: Each component handles a specific part of the UI
- **Flexibility**: Components can be combined and nested to create complex interfaces

## Component Structure

Every Angular component consists of four files:

| File Extension       | Name           | Purpose                                            |
| -------------------- | -------------- | -------------------------------------------------- |
| `.component.html`    | Template file  | It is used for view                                |
| `.component.ts`      | Component file | It is used for logic (model & controller)          |
| `.component.css`     | Styling file   | It is used for design and style and it is optional |
| `.component.spec.ts` | Testing file   | It is used for unit testing                        |

## Data Binding

Data Binding: It is a mechanism that connects template(html) and component(ts) files of a component.

### Types of Data Binding

There are two ways of Data Binding possible in Angular:

1. one way Data binding
2. Two way Data binding

#### 1. One-Way Data Binding

Using One way Data Binding, we can connect data from component file to template file or template file to component file.

- Component to template
- Template to component

##### A. Component to Template

**String Interpolation** (`{{}}`)

we can send values from component to template using String Interpolation. it uses double braces {{}}

```typescript
// app.component.ts
export class AppComponent {
  name: string = "Shubham";
}
```

```html
<!-- app.component.html -->
<p>My name is {{name}}</p>
```

##### B. Template to Component

**Event Binding** (`()`)

It is used to send event or triggere a function by an event from HTML(Template) to TS(component)

```html
<!-- app.component.html -->
<button (click)="display()">Click Me</button>
```

```typescript
// app.component.ts
export class AppComponent {
  display() {
    console.log("Hello world");
  }
}
```

---
name: to-issues
description: Desglosa un plan, especificación o PRD en tickets de Kanban independientes utilizando "vertical slices" (tracer bullets). Úsalo para convertir un PRD en tareas de ejecución técnica con formato de Card.
---

# To Issues

Break a plan into independently-grabbable issues using vertical slices (tracer bullets). Use when you want to convert a PRD into actionable technical tasks in Card format.

## Process

### 1. Gather context
Trabaja con el contexto de la conversación actual (PRD o Idea). Si el usuario proporciona una referencia externa, léela por completo. Asegúrate de tener claro el "qué" y el "por qué" antes de fragmentar.

### 2. Explore the codebase
Si tienes acceso al repo, explóralo para entender el estado actual. Los títulos y descripciones deben respetar el stack definido (Next.js, Astro, Sanity, Tailwind v4, Lucide) y el glosario del dominio del proyecto.

### 3. Draft vertical slices (Tracer Bullets)
Divide el plan en tickets que representen un **Pull Request (PR)** o hito de progreso significativo. Cada ticket debe ser una "rebanada vertical" que atraviese todas las capas (DB, Lógica, UI) para que sea funcional al terminar.

Aplica los principios:
- **Elegancia es Claridad:** Evita tickets redundantes.
- **Áreas:** Clasifica cada tarea según: `[FRONT]`, `[BACK]`, `[DATA]`, `[LOGIC]`, `[UI/UX]`, `[ADMIN]`, `[STUDIO]`, `[SALES]`.
- **Prioridad:** Asigna niveles desde `P0` (Bloqueante/Urgente) hasta `P3` (Mejora).

### 4. Quiz the user
Presenta el desglose propuesto como una lista numerada. Para cada slice, muestra:
- **Título**: con prefijo de área, ej: `[LOGIC] Implementar Hook de Reserva`.
- **Prioridad**: P0, P1, P2 o P3.
- **Bloqueado por**: ID de tareas que deben finalizarse antes.
- **Criterios de Aceptación**: Breve checklist de qué lo hace "Done".

Pregunta al usuario:
- ¿La granularidad es correcta para un Pull Request?
- ¿Las dependencias reflejan el flujo lógico de un código limpio?

### 5. Publish the Cards (Kanban Format)
Para cada slice aprobado, genera la card final siguiendo estrictamente este formato:

<issue-template>
**Título:** [ÁREA] Título de la tarea
**Cliente/Proyecto:** [Nombre del Proyecto]
**Prioridad:** [P0/P1/P2/P3]
**Estado:** Pendiente (backlog)

**Descripción:**
Breve contexto del "qué" y "por qué" (enfocado en transparencia para el equipo).

**Checklist (Criterios de Aceptación):**
- [ ] Paso técnico 1
- [ ] Paso técnico 2
- [ ] Criterio de validación final

**Bloqueos y Dependencias:**
- Bloqueado por: [ID o Título] / "Ninguno - Ejecución Inmediata".
</issue-template>

No cierres ni modifiques el PRD original. Mantén un tono profesional, técnico y orientado a la acción.
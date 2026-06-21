---
name: agile-front-dev
description: Desarrollo de componentes optimizado para tokens y escalabilidad. Reemplaza TDD en UI por arquitectura limpia, lógica en hooks y unidades relativas.
---

# Agile Front Dev

## Filosofía: Código Fluido y Escalable
El código debe ser fluido. Si el diseño se rompe al cambiar el contenido, no es una buena práctica.

## Constraints: Arquitectura de Unidades
- **Zero Arbitrary Values:** Está prohibido el uso de clases tipo `top-[23px]` o `w-[342px]`. 
- **Tailwind First:** Usa exclusivamente la escala estándar de Tailwind. Si el diseño pide 17px, usa `4` (16px) o `5` (20px) para mantener la consistencia del sistema.
- **Layout sobre Dimensiones:** Usa `flex-1`, `w-full`, `aspect-video` y `gap`, entre otros, para definir el tamaño, no anchos/altos fijos.

## Process

### 1. Logic-First
Identifica hooks y lógica de estado. Separa la complejidad del JSX.

### 2. Implementación Visual (Tracer Bullet)
1. **Estructura Semántica:** HTML limpio.
2. **Estilos Fluidos:** Aplica Tailwind basándote en el `Unit Scale Mapping` del diseño. 
3. **Responsive Design:** Define comportamientos desde mobile-first (`block md:flex`).

### 3. QA Checklist (Sustituye TDD)
- [ ] **Escalabilidad:** ¿El componente funciona si el texto es el doble de largo?
- [ ] **Unidades:** ¿Hay algún valor en `px` hardcodeado? (Eliminar si existe).
- [ ] **Accesibilidad:** Roles ARIA y contrastes.
- [ ] **Performance:** Optimización de renders.

## Workflow de Interacción
- El agente declara: *"He traducido el padding de 30px de Figma a `p-8` (32px) para respetar la escala de Tailwind"*.
- El agente justifica cualquier uso de valores arbitrarios (solo permitido en SVGs o assets muy específicos).
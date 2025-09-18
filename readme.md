# Amigo Secreto 🎁

Pequeña app web para organizar un sorteo de Amigo Secreto. Permite ingresar nombres, listarlos y generar un emparejamiento circular (cada persona le regala a otra). Construida con HTML + CSS + JavaScript sin dependencias.

## ✨ Características
- Añadir participantes y mostrarlos en una lista.
- Validación mínima (evita sortear con menos de 3).
- Sorteo circular simple y transparente.
- Sin frameworks, ideal para practicar JS vanilla.

## 🧠 ¿Cómo funciona el sorteo?
1. Se toma la lista de nombres ingresados.
2. Se genera un arreglo barajado con sort(() => Math.random() - 0.5).
3. Se crea un mapeo circular: cada i regala a (i + 1) % length.
4. Se renderiza como Nombre → Destinatario en la sección de resultados.

🧪 Sugerencias de mejora (roadmap breve)

- Eliminar o editar nombres de la lista.
- Persistencia en localStorage para no perder la lista al recargar.
- Exportar resultados a CSV/PDF.
- Soporte multi-idioma (ES/EN).
- Desplegar en GitHub Pages.
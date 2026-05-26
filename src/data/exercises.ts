export interface Exercise {
  id: string;
  title: string;
  description: string;
  instruction: string;
  initialCode: string;
  requiresImage: boolean;
  hasTimer?: boolean;
}

export interface Week {
  id: string;
  title: string;
  description: string;
  exercises: Exercise[];
}

export const weeks: Week[] = [
  {
    id: "week-1",
    title: "Semana 1: Fundamentos de VEX",
    description: "Introducción a la sintaxis básica, @ptnum, flotantes y vectores.",
    exercises: [
      {
        id: "w1-e1",
        title: "Hola VEX",
        description: "Tu primer script en VEX.",
        instruction: "Asigna el valor del número de punto (@ptnum) a un nuevo atributo llamado 'id'.",
        initialCode: "// Escribe tu código aquí\n",
        requiresImage: false
      },
      {
        id: "w1-e2",
        title: "Flotantes Simples",
        description: "Creando variables flotantes.",
        instruction: "Crea un atributo flotante llamado 'mi_float' y asígnale el valor de 3.14.",
        initialCode: "// Escribe tu código aquí\n",
        requiresImage: false
      },
      {
        id: "w1-e3",
        title: "Vectores de Color",
        description: "Manipulando el color @Cd.",
        instruction: "Asigna un color rojo puro a todos los puntos usando el atributo @Cd.",
        initialCode: "// Escribe tu código aquí\n@Cd = ",
        requiresImage: false
      },
      {
        id: "w1-e4",
        title: "Posición Inicial",
        description: "Moviendo geometría con @P.",
        instruction: "Suma 1 unidad en el eje Y a la posición actual (@P) de cada punto.",
        initialCode: "// Escribe tu código aquí\n@P.y += ",
        requiresImage: true
      },
      {
        id: "w1-e5",
        title: "Vectores Personalizados",
        description: "Creando tus propios vectores.",
        instruction: "Crea un atributo de vector llamado 'direccion' que apunte hacia arriba (0, 1, 0).",
        initialCode: "// Escribe tu código aquí\n",
        requiresImage: false
      }
    ]
  },
  {
    id: "week-2",
    title: "Semana 2: Nodos y Lógica Física",
    description: "Lógica de conexión, atributos post-fractura y grupos.",
    exercises: [
      {
        id: "w2-e1",
        title: "Creación de Grupos",
        description: "Agrupando por condición.",
        instruction: "Si la posición en Y (@P.y) es mayor a 0, añade el punto al grupo 'arriba'.",
        initialCode: "// Escribe tu código aquí\nif () {\n  \n}",
        requiresImage: true
      },
      {
        id: "w2-e2",
        title: "Selección por Índice",
        description: "Aislando puntos específicos.",
        instruction: "Si el número de punto (@ptnum) es par, píntalo de verde.",
        initialCode: "// Escribe tu código aquí\n",
        requiresImage: true
      },
      {
        id: "w2-e3",
        title: "Atributos de Velocidad",
        description: "Preparando para dinámicas.",
        instruction: "Asigna una velocidad inicial (@v) aleatoria basada en el número de punto usando la función rand().",
        initialCode: "// Escribe tu código aquí\n",
        requiresImage: false
      },
      {
        id: "w2-e4",
        title: "Masa Personalizada",
        description: "Definiendo propiedades físicas.",
        instruction: "Crea un atributo 'mass' que sea igual a 1.0 más un valor aleatorio entre 0 y 1.",
        initialCode: "// Escribe tu código aquí\n",
        requiresImage: false
      },
      {
        id: "w2-e5",
        title: "Limpieza de Grupos",
        description: "Removiendo puntos de grupos.",
        instruction: "Si un punto pertenece al grupo 'roto', quítalo del grupo 'intacto' (asigna 0 al grupo).",
        initialCode: "// Escribe tu código aquí\n",
        requiresImage: true
      }
    ]
  },
  {
    id: "week-3",
    title: "Semana 3: Atributos y Modelado Procedural",
    description: "Variables, @Cd, @P, condicionales if/else y set().",
    exercises: [
      {
        id: "w3-e1",
        title: "Declaración de Variables",
        description: "Usando variables locales.",
        instruction: "Declara una variable float 'altura' igual a @P.y, y úsala para definir el canal rojo de @Cd.",
        initialCode: "// Escribe tu código aquí\n",
        requiresImage: false
      },
      {
        id: "w3-e2",
        title: "Condicionales de Color",
        description: "If/Else con @Cd.",
        instruction: "Si @P.x es positivo, pinta el punto de azul; si no, píntalo de amarillo.",
        initialCode: "// Escribe tu código aquí\n",
        requiresImage: true
      },
      {
        id: "w3-e3",
        title: "La Función set()",
        description: "Asignando vectores eficientemente.",
        instruction: "Usa la función set() para asignar a @P las coordenadas (0, @ptnum * 0.1, 0).",
        initialCode: "// Escribe tu código aquí\n",
        requiresImage: true
      },
      {
        id: "w3-e4",
        title: "Distancia al Centro",
        description: "Calculando distancias.",
        instruction: "Calcula la distancia desde @P al origen (0,0,0) usando length() y guárdala en un atributo 'dist'.",
        initialCode: "// Escribe tu código aquí\n",
        requiresImage: false
      },
      {
        id: "w3-e5",
        title: "Escala por Distancia",
        description: "Modificando @pscale.",
        instruction: "Haz que @pscale sea inversamente proporcional a la distancia al origen (ej. 1.0 / (dist + 1.0)).",
        initialCode: "// Escribe tu código aquí\n",
        requiresImage: true
      }
    ]
  },
  {
    id: "week-4",
    title: "Semana 4: Loops y Generación de Geo",
    description: "For loops, addpoint(), addline() y UVs.",
    exercises: [
      {
        id: "w4-e1",
        title: "Tu Primer Loop",
        description: "Iterando con for.",
        instruction: "Crea un for loop que itere 5 veces, sumando 1 a una variable entera 'contador' en cada iteración.",
        initialCode: "// Escribe tu código aquí\nint contador = 0;\nfor(int i=0; i<5; i++) {\n  \n}",
        requiresImage: false
      },
      {
        id: "w4-e2",
        title: "Generando Puntos",
        description: "Usando addpoint().",
        instruction: "Usa un for loop para crear 10 puntos nuevos a lo largo del eje X usando addpoint().",
        initialCode: "// Escribe tu código aquí\n",
        requiresImage: true
      },
      {
        id: "w4-e3",
        title: "Conectando Puntos",
        description: "Usando addprim().",
        instruction: "Crea una línea (polyline) que conecte el punto actual con un nuevo punto creado 1 unidad arriba.",
        initialCode: "// Escribe tu código aquí\n",
        requiresImage: true
      },
      {
        id: "w4-e4",
        title: "Coordenadas UV Básicas",
        description: "Generando UVs.",
        instruction: "Asigna a v@uv un vector donde U sea @P.x y V sea @P.z.",
        initialCode: "// Escribe tu código aquí\n",
        requiresImage: true
      },
      {
        id: "w4-e5",
        title: "Espirales con Loops",
        description: "Matemáticas en loops.",
        instruction: "Genera 20 puntos en forma de espiral ascendente usando sin() y cos() dentro de un loop.",
        initialCode: "// Escribe tu código aquí\n",
        requiresImage: true
      }
    ]
  },
  {
    id: "week-5",
    title: "Semana 5: Instanciación y 'La Anémona'",
    description: "Vectores de orientación (v@N, v@up), @pscale y scatter.",
    exercises: [
      {
        id: "w5-e1",
        title: "Normales Hacia Afuera",
        description: "Calculando @N.",
        instruction: "Haz que la normal (@N) apunte desde el origen hacia la posición del punto (@P). No olvides normalizar el vector.",
        initialCode: "// Escribe tu código aquí\n",
        requiresImage: true
      },
      {
        id: "w5-e2",
        title: "El Vector Up",
        description: "Controlando la rotación.",
        instruction: "Define el vector v@up para que apunte siempre en la dirección del eje Y positivo (0,1,0).",
        initialCode: "// Escribe tu código aquí\n",
        requiresImage: false
      },
      {
        id: "w5-e3",
        title: "Escala Aleatoria",
        description: "Variando @pscale.",
        instruction: "Asigna a @pscale un valor aleatorio entre 0.5 y 2.0 basado en @ptnum.",
        initialCode: "// Escribe tu código aquí\n",
        requiresImage: true
      },
      {
        id: "w5-e4",
        title: "Alineación a la Velocidad",
        description: "Orientando partículas.",
        instruction: "Si tienes un vector de velocidad v@v, haz que la normal @N apunte en esa misma dirección.",
        initialCode: "// Escribe tu código aquí\n",
        requiresImage: true
      },
      {
        id: "w5-e5",
        title: "Preparando la Anémona",
        description: "Combinando atributos.",
        instruction: "Genera normales que apunten hacia afuera, un @up en Y, y un @pscale que disminuya cuanto más alto esté el punto en Y.",
        initialCode: "// Escribe tu código aquí\n",
        requiresImage: true
      }
    ]
  },
  {
    id: "week-6",
    title: "Semana 6: Animación Matemática",
    description: "@Time, @Frame, sin(), cos() y ondas de choque.",
    exercises: [
      {
        id: "w6-e1",
        title: "Movimiento con @Time",
        description: "Animación básica.",
        instruction: "Suma @Time a la posición en X (@P.x) para que la geometría se mueva constantemente.",
        initialCode: "// Escribe tu código aquí\n",
        requiresImage: true
      },
      {
        id: "w6-e2",
        title: "Oscilación con sin()",
        description: "Movimiento de vaivén.",
        instruction: "Haz que @P.y oscile usando la función sin() multiplicada por @Time.",
        initialCode: "// Escribe tu código aquí\n",
        requiresImage: true
      },
      {
        id: "w6-e3",
        title: "Círculos en el Tiempo",
        description: "Usando sin y cos.",
        instruction: "Mueve @P.x con cos(@Time) y @P.z con sin(@Time) para crear un movimiento circular.",
        initialCode: "// Escribe tu código aquí\n",
        requiresImage: true
      },
      {
        id: "w6-e4",
        title: "Ondas por Distancia",
        description: "Efecto de gota de agua.",
        instruction: "Calcula la distancia al origen y úsala dentro de un sin() junto con @Time para desplazar @P.y.",
        initialCode: "// Escribe tu código aquí\n",
        requiresImage: true
      },
      {
        id: "w6-e5",
        title: "Cambio de Color Animado",
        description: "Colores pulsantes.",
        instruction: "Haz que el canal rojo de @Cd pulse entre 0 y 1 usando sin(@Time * 5.0).",
        initialCode: "// Escribe tu código aquí\n",
        requiresImage: true
      }
    ]
  },
  {
    id: "week-7",
    title: "Semana 7: Repaso de Interfaz, VDBs y HDAs",
    description: "Sliders con chf(), conversión y limpieza de VDBs, y empaquetado en Houdini Digital Assets.",
    exercises: [
      {
        id: "w7-e1",
        title: "Slider de Altura",
        description: "La función correcta para un slider flotante.",
        instruction: "Completa el código para crear un slider de tipo flotante llamado \"altura\" y usarlo para mover los puntos en Y.\n\nfloat altura = _______( \"altura\" );\n@P.y += altura;\n\nEscribe en el editor únicamente la función que va en el espacio en blanco.",
        initialCode: "// ¿Qué función va en el espacio en blanco?\n// float altura = _______( \"altura\" );\n// @P.y += altura;\n\n",
        requiresImage: false,
        hasTimer: true
      },
      {
        id: "w7-e2",
        title: "VDB Limpio",
        description: "Orden correcto de nodos para convertir y limpiar un VDB.",
        instruction: "Tienes una malla poligonal y quieres convertirla a VDB, suavizarla y obtener una malla limpia con topología uniforme. Escribe en orden los nodos que usarías (uno por línea).",
        initialCode: "// Escribe los nodos en orden (uno por línea):\n// 1. \n// 2. \n// 3. \n// 4. \n",
        requiresImage: false,
        hasTimer: true
      },
      {
        id: "w7-e3",
        title: "Mi Primer HDA",
        description: "Cómo convertir un subnet en un Houdini Digital Asset.",
        instruction: "Tienes una red de nodos dentro de un subnet que quieres convertir en una herramienta reutilizable con su propio ícono e interfaz (HDA). ¿Qué opción del menú contextual (clic derecho sobre el subnet) usas? Escribe el nombre de la opción.",
        initialCode: "// Escribe el nombre de la opción de menú:\n\n",
        requiresImage: false,
        hasTimer: true
      }
    ]
  },
  {
    id: "week-8",
    title: "Semana 8: El Hechizo Final (Vellum y Wedge)",
    description: "Pines para fijar tela, presión para inflar geometría y wedge para generar variaciones de simulación.",
    exercises: [
      {
        id: "w8-e1",
        title: "El Punto Fijo",
        description: "Fijar puntos de una tela Vellum.",
        instruction: "Tienes una tela simulada con Vellum y quieres que un grupo de puntos llamado \"pin\" quede fijo en su posición original. ¿Qué nodo de Vellum agregas, y qué valor pones en el campo Group? Escribe ambas respuestas.",
        initialCode: "// Nodo que agregas:\n\n// Valor del campo Group:\n\n",
        requiresImage: false,
        hasTimer: true
      },
      {
        id: "w8-e2",
        title: "Inflando la Esfera",
        description: "El nodo que infla geometría como un globo en Vellum.",
        instruction: "Quieres inflar una esfera con Vellum como si fuera un globo. ¿Qué nodo agregas que crea automáticamente dos constraints internos (un Vellum Cloth y un Vellum Pressure)? Escribe el nombre del nodo.",
        initialCode: "// Escribe el nombre del nodo:\n\n",
        requiresImage: false,
        hasTimer: true
      },
      {
        id: "w8-e3",
        title: "Diez Simulaciones",
        description: "Herramienta para generar variaciones automáticas de simulación.",
        instruction: "Quieres correr 10 versiones de tu simulación de Vellum variando automáticamente la rigidez (stiffness). ¿Qué nodo o herramienta de Houdini usas, y en una frase qué hace? Escribe el nombre y una breve descripción.",
        initialCode: "// Nodo / Herramienta:\n\n// ¿Qué hace?:\n\n",
        requiresImage: false,
        hasTimer: true
      }
    ]
  }
];

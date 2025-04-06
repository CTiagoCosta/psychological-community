import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Users, ArrowRight } from "lucide-react"

export default function TrainingPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Capacitações e Intervisões</h1>
          <p className="text-muted-foreground">
            Participe de capacitações e intervisões exclusivas para membros premium
          </p>
        </div>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Próximos Eventos</TabsTrigger>
          <TabsTrigger value="intervision">Intervisões</TabsTrigger>
          <TabsTrigger value="training">Capacitações</TabsTrigger>
          <TabsTrigger value="past">Eventos Passados</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="intervision" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents
              .filter((event) => event.type === "Intervisão")
              .map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="training" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents
              .filter((event) => event.type === "Capacitação")
              .map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="past" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <EventCard key={index} event={event} isPast={true} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface Event {
  id: string
  title: string
  description: string
  type: string
  date: string
  time: string
  duration: string
  instructor: string
  participants: number
  maxParticipants: number
  image: string
  isPremium: boolean
  isRegistered?: boolean
}

function EventCard({ event, isPast = false }: { event: Event; isPast?: boolean }) {
  return (
    <Card className="overflow-hidden flex flex-col">
      <div className="relative h-48">
        <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
        <div className="absolute top-2 left-2 flex gap-2">
          <Badge variant="secondary" className="bg-white text-black hover:bg-white">
            {event.type}
          </Badge>
          {event.isPremium && <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Premium</Badge>}
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{event.title}</CardTitle>
        <CardDescription>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>
              {event.time} ({event.duration})
            </span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{event.description}</p>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            <span>
              {event.participants}/{event.maxParticipants} participantes
            </span>
          </div>
          <span className="text-muted-foreground">Por {event.instructor}</span>
        </div>
      </CardContent>
      <CardFooter>
        {isPast ? (
          <Button variant="outline" className="w-full" asChild>
            <Link href={`/training/${event.id}`}>Ver Gravação</Link>
          </Button>
        ) : event.isRegistered ? (
          <Button className="w-full" asChild>
            <Link href={`/training/${event.id}`}>
              Acessar <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        ) : (
          <Button variant="outline" className="w-full">
            Inscrever-se
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

// Dados de exemplo
const upcomingEvents = [
  {
    id: "1",
    title: "Intervisão: Casos clínicos em TCC",
    description:
      "Discussão de casos clínicos utilizando a abordagem Cognitivo-Comportamental, com foco em transtornos de ansiedade.",
    type: "Intervisão",
    date: "15/06/2023",
    time: "19:00",
    duration: "2h",
    instructor: "Dra. Maria Santos",
    participants: 12,
    maxParticipants: 20,
    image: "/placeholder.svg?height=200&width=400",
    isPremium: true,
    isRegistered: true,
  },
  {
    id: "2",
    title: "Capacitação: Marketing para Psicólogos",
    description:
      "Aprenda estratégias éticas e eficientes para divulgar seu trabalho como psicólogo, respeitando o código de ética profissional.",
    type: "Capacitação",
    date: "18/06/2023",
    time: "14:00",
    duration: "2h",
    instructor: "Carlos Mendes",
    participants: 25,
    maxParticipants: 50,
    image: "/placeholder.svg?height=200&width=400",
    isPremium: true,
    isRegistered: true,
  },
  {
    id: "3",
    title: "Intervisão: Psicanálise Contemporânea",
    description:
      "Discussão de casos clínicos sob a perspectiva psicanalítica contemporânea, com foco em questões atuais.",
    type: "Intervisão",
    date: "22/06/2023",
    time: "18:30",
    duration: "2h",
    instructor: "Dr. Pedro Costa",
    participants: 8,
    maxParticipants: 15,
    image: "/placeholder.svg?height=200&width=400",
    isPremium: true,
    isRegistered: false,
  },
  {
    id: "4",
    title: "Capacitação: Finanças para Psicólogos Autônomos",
    description:
      "Aprenda a gerenciar suas finanças como profissional autônomo, incluindo precificação, impostos e planejamento financeiro.",
    type: "Capacitação",
    date: "25/06/2023",
    time: "15:00",
    duration: "3h",
    instructor: "Ana Oliveira",
    participants: 18,
    maxParticipants: 30,
    image: "/placeholder.svg?height=200&width=400",
    isPremium: true,
    isRegistered: false,
  },
]

const pastEvents = [
  {
    id: "5",
    title: "Capacitação: Documentos Psicológicos",
    description:
      "Aprenda a elaborar documentos psicológicos de acordo com as normas do CFP, incluindo laudos, relatórios e atestados.",
    type: "Capacitação",
    date: "05/05/2023",
    time: "14:00",
    duration: "2h30",
    instructor: "Dra. Luiza Mendes",
    participants: 35,
    maxParticipants: 35,
    image: "/placeholder.svg?height=200&width=400",
    isPremium: true,
  },
  {
    id: "6",
    title: "Intervisão: Psicologia Sistêmica",
    description: "Discussão de casos clínicos sob a perspectiva sistêmica, com foco em terapia familiar e de casal.",
    type: "Intervisão",
    date: "10/05/2023",
    time: "19:00",
    duration: "2h",
    instructor: "Dr. João Silva",
    participants: 15,
    maxParticipants: 15,
    image: "/placeholder.svg?height=200&width=400",
    isPremium: true,
  },
]


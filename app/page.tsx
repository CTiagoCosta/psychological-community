import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Users, Calendar, MessageSquare, Award } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="py-12 md:py-24 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">Comunidade Virtual para Psicólogos e Estudantes</h1>
          <p className="text-xl text-muted-foreground">
            Um espaço digital para suporte, troca e networking entre estudantes e profissionais da psicologia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/register">Criar Conta Gratuita</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">Saiba Mais</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/placeholder.svg?height=400&width=500"
            alt="Psicólogos colaborando"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-50 -mx-4 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Funcionalidades Principais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Users className="h-10 w-10 text-primary" />}
              title="Perfis Profissionais"
              description="Crie seu perfil profissional, destaque sua formação e conecte-se com outros profissionais."
            />
            <FeatureCard
              icon={<MessageSquare className="h-10 w-10 text-primary" />}
              title="Fórum de Discussão"
              description="Participe de discussões sobre temas relevantes para a psicologia e compartilhe conhecimentos."
            />
            <FeatureCard
              icon={<BookOpen className="h-10 w-10 text-primary" />}
              title="Biblioteca de Recursos"
              description="Acesse materiais sobre ética profissional, contratos e modelos de documentos."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-primary" />}
              title="Grupos de Interesse"
              description="Participe de grupos específicos por área de atuação e temas de interesse."
            />
            <FeatureCard
              icon={<Calendar className="h-10 w-10 text-primary" />}
              title="Intervisão e Capacitação"
              description="Encontros mensais entre profissionais da mesma abordagem teórica e aulas sobre temas relevantes."
            />
            <FeatureCard
              icon={<Award className="h-10 w-10 text-primary" />}
              title="Mentorias e Supervisão"
              description="Conexão entre profissionais experientes e iniciantes para orientação e crescimento."
            />
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Planos</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Escolha o plano que melhor atende às suas necessidades profissionais
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Plano Gratuito</CardTitle>
                <CardDescription>Para estudantes e profissionais iniciantes</CardDescription>
                <div className="mt-4 text-3xl font-bold">R$ 0</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <PlanFeature included>Perfil básico</PlanFeature>
                  <PlanFeature included>Acesso ao fórum de discussão</PlanFeature>
                  <PlanFeature included>Biblioteca de recursos básicos</PlanFeature>
                  <PlanFeature included>Participação em grupos de interesse</PlanFeature>
                  <PlanFeature>Encaminhamento de pacientes</PlanFeature>
                  <PlanFeature>Intervisão profissional</PlanFeature>
                  <PlanFeature>Aulas e capacitações</PlanFeature>
                </ul>
                <Button className="w-full mt-6" asChild>
                  <Link href="/register">Começar Agora</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary">
              <CardHeader className="bg-primary/5">
                <div className="py-1 px-3 rounded-full bg-primary text-primary-foreground text-xs font-medium w-fit mb-2">
                  Recomendado
                </div>
                <CardTitle className="text-2xl">Plano Premium</CardTitle>
                <CardDescription>Para psicólogos com CRP</CardDescription>
                <div className="mt-4 text-3xl font-bold">
                  R$ 49,90<span className="text-sm font-normal text-muted-foreground">/mês</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <PlanFeature included>Perfil profissional completo com destaque</PlanFeature>
                  <PlanFeature included>Acesso ao fórum de discussão</PlanFeature>
                  <PlanFeature included>Biblioteca de recursos completa</PlanFeature>
                  <PlanFeature included>Participação em grupos de interesse</PlanFeature>
                  <PlanFeature included>Encaminhamento de pacientes</PlanFeature>
                  <PlanFeature included>Intervisão profissional mensal</PlanFeature>
                  <PlanFeature included>Aulas e capacitações mensais</PlanFeature>
                </ul>
                <Button className="w-full mt-6" asChild>
                  <Link href="/register?plan=premium">Assinar Agora</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-slate-50 -mx-4 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">O que dizem nossos membros</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Ana Silva"
              role="Psicóloga Clínica"
              image="/placeholder.svg?height=100&width=100"
              testimonial="A plataforma tem sido fundamental para meu desenvolvimento profissional. As intervisões e o networking me ajudaram a expandir minha prática clínica."
            />
            <TestimonialCard
              name="Carlos Mendes"
              role="Estudante de Psicologia"
              image="/placeholder.svg?height=100&width=100"
              testimonial="Como estudante, encontrei um espaço acolhedor para tirar dúvidas e aprender com profissionais experientes. Os recursos disponíveis são excelentes."
            />
            <TestimonialCard
              name="Mariana Costa"
              role="Psicóloga Organizacional"
              image="/placeholder.svg?height=100&width=100"
              testimonial="As capacitações e o material disponibilizado me ajudaram a estruturar melhor meu trabalho. Recomendo para todos os profissionais da área."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para se juntar à nossa comunidade?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Crie sua conta hoje e comece a aproveitar todos os benefícios da nossa plataforma para psicólogos e
            estudantes de psicologia.
          </p>
          <Button size="lg" asChild>
            <Link href="/register">
              Criar Conta Gratuita <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

function PlanFeature({ children, included = false }: { children: React.ReactNode; included?: boolean }) {
  return (
    <li className="flex items-center gap-2">
      {included ? (
        <svg className="h-5 w-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg
          className="h-5 w-5 text-muted-foreground flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      )}
      <span className={included ? "" : "text-muted-foreground"}>{children}</span>
    </li>
  )
}

function TestimonialCard({
  name,
  role,
  image,
  testimonial,
}: { name: string; role: string; image: string; testimonial: string }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center gap-4 mb-4">
          <Image src={image || "/placeholder.svg"} alt={name} width={50} height={50} className="rounded-full" />
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
        <p className="italic">{testimonial}</p>
      </CardContent>
    </Card>
  )
}


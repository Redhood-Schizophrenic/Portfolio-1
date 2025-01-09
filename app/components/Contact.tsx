import { Card, CardHeader, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface Contact {
  title: string
  description: string
  link: string
  icon?: any
}

const ContactCard = ({ contact }: { contact: Contact }) => {
  return (
    <Card className="group w-[350px] relative border border-border/50 bg-background/50 backdrop-blur-sm transition-all hover:border-primary/50">
      <CardHeader>
        {contact.icon && (
          <div className="mb-2 text-primary flex gap-4">
            <h3> {contact.icon} </h3>
            <h3 className="text-xl font-semibold tracking-tight">{contact.title}</h3>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground pb-4">{contact.description}</p>
        <Link className="bg-blue-500 rounded-xl px-4 py-2 text-white" href={contact.link}> Contact me </Link>
      </CardContent>
    </Card>
  )
}

export default ContactCard


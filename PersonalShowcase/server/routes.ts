import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(10)
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate request body
      const data = contactSchema.parse(req.body);
      
      // Store contact submission
      await storage.createContactSubmission(data);
      
      res.status(200).json({
        success: true,
        message: 'Contact form submitted successfully'
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: 'Invalid form data',
          errors: error.errors
        });
      }
      
      res.status(500).json({
        success: false,
        message: 'An error occurred while submitting the form'
      });
    }
  });

  // Get resume endpoint
  app.get('/resume.pdf', (_req, res) => {
    // In a real app, this would serve an actual PDF file
    // For now, we'll just respond with a message
    res.status(200).json({
      message: 'Resume download would happen here'
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
